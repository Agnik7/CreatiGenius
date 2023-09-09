import os
import uuid
from pymongo import MongoClient
import bcrypt
MONGO_PASSWORD = os.environ.get("MONGODB_PASSWORD")
CONNECTION = f"mongodb+srv://bakshiagnik:{MONGO_PASSWORD}@cluster0.gcatzcw.mongodb.net/?retryWrites=true&w=majority"
CLIENT = MongoClient(CONNECTION)
if CLIENT:
    print("=========Connection Successfull=============")
else:
    print("==========Connection Failed==========")

USER_DATABASE = CLIENT.get_database("database")
USER_DETAILS = USER_DATABASE['user_db']

class Database:
    
    def __init__(self):
        self.name = ''
    def register(self,name, email, password):
        '''
            Function to register the user to the database

            Args: name (String), email (String), password (String)

            Returns: True or False based on successfull user registration
        '''
        existing_user = USER_DETAILS.find_one({"email": email})
        if existing_user:
            print("xxxxxxxxxxxxxxxxxxxxxxxxxxx Error: User already exists in the database.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            return False
        user_id = int(uuid.uuid4().int & (1 << 31)-1)
        user = {
                '_id': str(user_id),
                'name': name,
                'email': email,
                'password': password
            }
        response=USER_DETAILS.insert_one(user)
        if response.inserted_id:
            return True
        else:    
            return False

    def login(self,email,password):
        '''
            Function to login the user by checking if the user's email is present in the database or not.

            Args: email (String), password (String)

            Returns: True or False based on successfull user login
        '''
        user = USER_DETAILS.find_one({"email": email})
        if user:
            user_password = user["password"]
            self.name = user['name']
            if bcrypt.checkpw(password.encode('utf-8'), user_password.encode('utf-8')):
                return True
            else:
                print("xxxxxxxxxxxxxxxxxxxxxxxxxx Error: Password did not match xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
                return False
        else:
            print("xxxxxxxxxxxxxxxxxxxxxxxxxx Error: No such user xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            return False
    
    def user_id(self,email):
        '''
            Function to find user id

            Args: email (String)

            Returns: user id (String)
        '''
        user = USER_DETAILS.find_one({'email':email})
        return user["_id"]
    def user_name(self):
        '''
            Function to return the username of user

            Args: None

            Returns: username (String)
        '''
        return self.name
    
    def reset_password(self, email, new_password):
        '''
            Function to reset the user's password

            Args: email (String), new_password (String)

            Returns: True if password changed successfully, False if there was error
        '''
        user_details = USER_DETAILS.find_one({'email':email})
        if not user_details:
            print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Error: User does not exist xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            return False
        user = {
            '_id': user_details['_id'],
            'name': user_details['name'],
            'email': user_details['email'],
            'password': new_password
        }
        update = USER_DETAILS.update_one({'email': email}, {'$set': user})
        if update:
            print("========================Password Changed Successfully================================")
            return True
        else:
            print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Error occurred while changing the password xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            return False
