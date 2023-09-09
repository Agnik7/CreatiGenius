import os
from flask import Flask, jsonify,request, session
from flask_cors import CORS
from flask_session import Session
from authenticate_user.auth import Authenticate
from database.database import Database
from hash_password.hash_password import Hash

database = Database()

FLASK_SECRET_KEY = os.environ.get("FLASK_SECRET_KEY")

app = Flask(__name__)
app.secret_key = FLASK_SECRET_KEY
app.config['SESSION_TYPE'] = 'filesystem'
app.config.update(
    SESSION_COOKIE_SAMESITE="None",
    SESSION_COOKIE_SECURE=True,
    SESSION_COOKIE_HTTPONLY=True
)
Session(app)
CORS(app, supports_credentials=True, resources={
    r"/*": {
        "origins": "*",
        "allow_headers": ["Content-Type", "Authorization"],
        "methods": ["GET", "POST", "PUT", "DELETE"]
    }
})




@app.route('/register_user', methods=['POST'])
def register_user():
    '''
        Function to register the user to the database

        Args: None

        Returns: JSON, HTTP Status Code
    '''
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    hash = Hash(password)
    if not name or not email or not password:
        return jsonify({"message": "Please provide all required fields."}), 400

    hashed_password = hash.hashed_password()
    register = database.register(name, email, hashed_password)
    if register:
        return jsonify({"message": "User registered successfully."}), 200
    else:
        return jsonify({"message": "Error occurred while registering user."}), 500



@app.route('/login_user', methods=['POST'])
def login_user():
    '''
        Function to login the user and generate session cookie

        Args: None

        Returns: JSON, HTTP Status Code
    '''
    print("============== Login ===============")
    data = request.json
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({"message": "Invalid credentials"}), 400
    login = database.login(email,password)
    if login:
        authenticate_user = Authenticate(email,password)
        id = database.user_id(email)
        user_name = database.user_name()
        session['logged_in'] = True
        session['email'] = email
        session['user_id'] = id
        token = authenticate_user.generate_token(id)
        return jsonify({"Success": "User is authenticated and logged in", "token": token, "name":user_name}), 200

    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/forgot_password', methods=['POST'])
def reset():
    '''
        Function to reset the password if the user forgets his/her password

        Args: None

        Returns: JSON, HTTP Status Code
    '''
    data = request.json
    email = data.get('email')
    new_password = data.get('new_password')
    if not email or not new_password:
        return jsonify({"message": "Please provide all required fields."}), 400
    hash = Hash(new_password)
    new_hashed_password = hash.hashed_password()
    reset_password = database.reset_password(email, new_hashed_password)
    if reset_password:
        return jsonify({"message": "Password changed successfully."}), 200
    else:
        return jsonify({"message": "Error occurred while changing password."}), 500

if __name__ == "__main__" :
        app.run(host='localhost', port=9000, debug=True)