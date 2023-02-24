from abc import ABC

class UserClass(ABC):
    def __init__(self, fullNameString, uniqueIdString, usernameString, passwordString):
        self.fullNameString = fullNameString
        self.uniqueIdString = uniqueIdString
        self.usernameString = usernameString
        self.passwordString = passwordString

