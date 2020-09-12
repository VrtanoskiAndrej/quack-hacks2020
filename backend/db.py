from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class users(db.Model):
    __tablename__ = "users"
    __id__ = db.Column("id", db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    
    def __init__(self,name,email):
        self.name = name
        self.email = email

usr = users("hailey", "nho38@gatech.edu")
# db.session.add(usr)
users.query.filter_by(name='hailey').delete()
db.session.commit()

@app.route('/')
def home():
    return "Hello World"

if __name__ == "__main__":
    db.create_all()
    app.run()

# @app.teardown_appcontext
# def shutdown_session(exception=None):
#     db.session.remove()


# result = [r.name for r in db.session.query(users).all()]
# from pdb import set_trace; set_trace()