from flask import Flask, abort, jsonify, request

app = Flask(__name__)

@app.route('/app/api/create', methods = ['POST'])
def create_user():
    #Check for the data
    if not request.json:    #can add other conditions later to make sure it has certain data with: or not 'data' in request.json. Will need to check formats too
        abort(400)
    
    """Here goes the code to take that data and store it in the databse"""

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
    user = [{}] #get the user's information and store it in a list
    #abort if this user has no information --- not sure if this is totally Needed
    if len(user) == 0:
        abort(404)

    """Code to now compare with everybody"""

    matches = [{}]
    return jsonify({'Recommended peers': matches})
