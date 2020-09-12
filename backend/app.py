from flask import Flask, abort, jsonify, request
<<<<<<< HEAD
import numpy as np
=======
from flask import abort
>>>>>>> f70dc5cba5d2b1985dfdcc8e98c1c8486c0445c2

app = Flask(__name__)

@app.route('/app/api/create', methods = ['POST'])
def create_user():
    #Check for the data
    if not request.json:    #can add other conditions later to make sure it has certain data with: or not 'data' in request.json. Will need to check formats too
        """or not 'firstName' in request.json or not 'lastName' in request.json or not 'phoneNumber' in request.json"""
        abort(400)
    
    """Pass in to database"""

    return jsonify({'created': True}), 201

@app.route('/app/api/update/<int:userid>', methods = ['PUT'])
def update_user(userid):
    user = [{}] #get the user's information and store it in a list
    #abort if this user has no information
    if len(user) == 0:
        abort(404)
    if not request.json:
        abort(404)
    """Check if everthing is unicode - hopefully shouldn't matter"""

    """Here goes the code to take that data and update the corresponding user"""

    return jsonify({'updated': True})

@app.route('/app/api/recommend/<int:userid>', methods = ['GET'])
def recommend_matches(userid):
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
    maxID = np.where(finalScores == np.amax(finalScores))

    matches = [{}]
    return jsonify({'Recommended peers': matches})