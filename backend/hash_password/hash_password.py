import bcrypt
class Hash:

    def __init__(self, password):
        self.password = password

    def hashed_password(self):
        '''
            Function to hash the user's password for better protection.

            Args: None

            Returns: hashed_password (String)
        '''
        hashed_password = bcrypt.hashpw(self.password.encode('utf-8'), bcrypt.gensalt())
        return hashed_password.decode('utf-8')