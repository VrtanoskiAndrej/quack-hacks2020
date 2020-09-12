from flask import Flask, abort, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import numpy as np

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

courses = db.Table(
    'courses',
    db.Column('course_id', db.Integer, db.ForeignKey('course.course_id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('user.user_id', primary_key = True))
    )

interests = db.Table(
    'interests',
    db.Column('interest_id',db.Integer, db.ForeignKey('interest.interest_id', primary_key=True)),
    db.Column('weight', db.Integer),
    db.Column('user_id', db.Integer, db.ForeignKey('user.user_id', primary_key=True))
)

class User(db.Model):
    user_id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    firstName = db.Column(db.String(100))
    lastName = db.Column(db.String(100))
    username = db.Column(db.String(100))
    email = db.Column(db.String(100))
    phoneNumber = db.Column(db.Integer)
    courses = db.relationship('Course', secondary=courses, lazy='subquery',backref=db.backref('users',lazy='dynamic'))
    interests = db.relationship('Interest', secondary=interests, lazy='subquery', backref=db.backref('users',lazy='dynamic'))
    
    def __init__(self,firstName, lastName, username, email, phoneNumber):
        self.firstName = firstName
        self.lastName = lastName
        self.username = username
        self.email = email
        self.phoneNumber = phoneNumber
        self.email = email

class Course(db.Model):
    course_id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    course_name = db.Column(db.String(100))
    # _users = db.relationship('User', secondary=courses, backref=db.backref('courses_backref',lazy='dynamic'))

    def __init__(self,course_name):
        self.course_name = course_name

class Interest(db.Model):
    interest_id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    interest = db.Column(db.String(100))
    def __init__(self,interest):
        self.interest = interest

all_Courses = [
    'CS 1101','CS 1301', 
    'CS 1331', 'ENGL 1101', 
    'ENGL 1102', 'APPH 1040',
    'APPH 1050', 'PSYCH 1101',
    'MATH 1551', 'MATH 1552',
    'MATH 1553', 'COE 201', 'HIST 2111']

for c in all_Courses:
    course = Course(c)
    db.session.add(course)
    db.session.commit()

all_Interests = [
    'Reading', 'Gaming', 
    'Rocket Building', 'Watching TV', 
    'Family Time', 'Movies', 
    'Fishing', 'Computer',
    'Gardening', 'Renting Movies']

for i in all_Interests:
    interest = Interest(i)
    db.session.add(interest)
    db.session.commit()

# usr = User("hailey", "nho38")
# db.session.add(usr)
# # User.query.filter_by(username='hailey').delete()

# cs1371 = Course("CS1371")
# db.session.commit()
# cs1371.users.append(usr)
# db.session.commit()

def courseDB():
    query = db.session.query(Course,User).join(Course.users).all()
    rows, cols = len(db.session.query(Course).all()), len(db.session.query(User).all())
    courseDB = np.zeros((rows,cols))
    for i in range (rows):
        c = query[i][0].course_id - 1
        r = query[i][1].user_id - 1
        courseDB[r][c] = 1
    return courseDB

def interestDB():
    query = db.session.query(Interest,User).join(Interest.users).all()
    rows, cols = len(db.session.query(Interest).all()), len(db.session.query(User).all())
    interestDB = np.zeros((rows,cols))
    for i in range (rows):
        c = query[i][0].interest_id
        r = query[i][1].user_id
        interestDB[r][c] = 1
    return interestDB

def findMaxIndex(array):
    maximum = array[0]
    maxIndex = 0
    for index in range(0, len(array)):
        if(array[index] > maximum):
            maximum = array[index]
            maxIndex = index
    return maxIndex

# --------------------------------------
# register user
@app.route('/app/api/create', methods = ['POST'])
def create_user():
    #Check for the data
    if not request.json:    #can add other conditions later to make sure it has certain data with: or not 'data' in request.json. Will need to check formats too
        abort(400)

    firstName = request.form.get('firstName')
    lastName = request.form.get('lastName')
    username = request.form.get('username')
    email = request.form.get('email')
    phoneNumber = request.form.get('phoneNumber')
    
    usr = User(firstName, lastName, username, email, phoneNumber)
    db.session.add(usr)
    db.session.commit()

    courses = request.form.get('courses')
    interests = request.form.get('hobbies')

    course_idx = [course["id"] for  course in courses]
    interest_idx = [interest["id"] for interest in interests]

    for c in course_idx:
        course = Course.query.filter(course_id=c).all()
        course[0].users.append(usr)
        db.session.commit()
    
    for i in interest_idx:
        interest = Interest.query.filter(interest_id=i).all()
        interest[0].users.append(usr)
        db.session.commit()

    return jsonify({'created': True}), 201

# matching
@app.route('/app/api/recommend/<int:userid>', methods = ['GET'])
def recommend_matches(userid):
    user = [{}] #get the user's information and store it in a list
    #abort if this user has no information --- not sure if this is totally Needed
    if len(user) == 0:
        abort(404)

    #define matrices containing the other user's course and interests as well as single row matrices representing the user's
    courseDB = np.array(courseDB())
    interestDB = np.array(interestDB())
    user_course = np.array(courseDB[userid - 1])
    user_interest = np.array(interestDB[userid - 1])

    #use masking to multiply correspondng matrices together to get user scores for each category
    courseScores = np.matmul(courseDB, user_course)
    interestScores = np.matmul(interestDB, user_interest)
    finalScores = np.add(courseScores, interestScores)

    maxScore = np.amax(finalScores)
    maxID = findMaxIndex(finalScores)

    match_User = User.query.filter(user_id=maxID + 1).all()

    firstName = match_User[0].firstName
    lastName = match_User[0].lastName
    email = match_User[0].email
    phoneNumber = match_User[0].phoneNumber

    return jsonify({'firstName' : firstName,'lastName' : lastName, 'email': email, 'phoneNumber' : phoneNumber})


# @app.teardown_appcontext
# def shutdown_session(exception=None):
#     db.session.remove()


if __name__ == "__main__":
    db.create_all()
    app.run()


# result = [r for r in Course.query.filter(Course.users.any(id=0)).all()]
# result = [r for r in db.session.query(User).all()]
# result = db.session.query(Course).join(Course.users).filter(User.user_id==1).all()
# result = db.session.query(Course,User).join(Course.users).filter(User.user_id==1).all()

# result = [r for r in Course.query.join(Course.users).filter_by(user_id=1).all()]
# courseDB = courseDB()
# print(courseDB)

# from pdb import set_trace; set_trace()