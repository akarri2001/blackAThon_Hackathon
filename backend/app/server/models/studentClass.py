from typing import Optional
from pydantic import BaseModel, EmailStr, Field


#how student data will be repsesented in MongoDB database
class StudentScheme(BaseModel):
    #in pydantic the ellipses (...) indicates a field is required, could be replaced with None or a default value
    firstName: str = Field(...)
    lastName: str = Field(...)
    email: EmailStr = Field(...)
    

from UserClass import UserClass
class StudentClass(UserClass):

    def __init__(self, fullNameString, userIdString, usernameString, passwordString, pollsAnswered = {}):
        super().__init__(fullNameString=fullNameString, uniqueIdString=userIdString, usernameString=usernameString, passwordString=passwordString)
        self.pollsAnswered = pollsAnswered
    
    def selectOption(self,poll_IdString, optionString):
        #connect to MongoDB
        #find the pollId and the options
        #get the poll stuff
        #submit an addOneToOption(optionString) method call to the poll object
        pass        

    def removeOption(self,poll_IdString, optionString):
        pass

    def getName(self):
        return self.fullNameString
    
    def getUserId(self):
        return self.uniqueIdString

    def getPollsAnswered(self):
        return self.pollsAnswered
    
    def getFeed(self):
        pass

    
    
    