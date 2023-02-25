from models.user_model import UserClass
from pydantic import BaseModel
from config.database import studentCollection, pollsCollection



#how student data will be repsesented in MongoDB database
class Student(UserClass , BaseModel):
    #in pydantic the ellipses
    # (...) indicates a field is required, could be replaced with None or a default value
    studentID: str #= Field(...)
    pollsAnswered: dict 
    
    
    
def selectOption(self,poll_IdString, optionString):
    #connect to MongoDB
    #find the pollId and the options
    poll = pollsCollection.find_one()
    #get the poll stuff
    #submit an addOneToOption(optionString) method call to the poll object
    pass        

def removeOption(self,poll_IdString, optionString):
    
    pass

def getFirstName(self):
    return self.firstName

def getLastName(self):
    return self.lastName

def getFullName(self):
    return self.fullName+" "+self.lastName

def getStudentId(self):
    return self.studentId

def getPollsAnswered(self):
    return self.pollsAnswered

def getFeed(self):
    pass

