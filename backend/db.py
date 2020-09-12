from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

courses = db.Table(
    'courses',
    db.Column('course_id', db.Integer, db.ForeignKey('course.id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('user.id', primary_key = True))
    )

interests = db.Table(
    'interests',
    db.Column('interest_id',db.Integer, db.ForeignKey('interest.id', primary_key=True)),
    db.Column('weight', db.Integer),
    db.Column('user_id', db.Integer, db.ForeignKey('user.id', primary_key=True))
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    username = db.Column(db.String(100))
    email = db.Column(db.String(100))
    courses = db.relationship('Course', secondary=courses, lazy='subquery',backref=db.backref('users',lazy=True))
    
    def __init__(self,username,email):
        self.username = username
        self.email = email

class Course(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    course_name = db.Column(db.String(100))

    def __init__(self,course_name):
        self.course_name = course_name

class Interest(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    interest = db.Column(db.String(100))
    def __init__(self,interest):
        self.interest = interest


# usr = User("hailey", "nho38")
# db.session.add(usr)
# # User.query.filter_by(username='hailey').delete()

# cs1371 = Course("CS1371")
# db.session.commit()
# cs1371.users.append(usr)
# db.session.commit()

@app.route('/')
def home():
    return "Hello World"

if __name__ == "__main__":
    db.create_all()
    app.run()

# @app.route('/query')
# def query():



@app.teardown_appcontext
def shutdown_session(exception=None):
    db.session.remove()


# result = [r for r in db.session.query(User).all()]
# from pdb import set_trace; set_trace()