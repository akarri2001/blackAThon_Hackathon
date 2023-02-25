from models.user_model import UserClass
from models.poll_model import PollClass
from pydantic import BaseModel
from config.database import studentCollection, pollsCollection
from models.role_model import Role
from bson import ObjectId


#how student data will be repsesented in MongoDB database
class Student(UserClass , BaseModel):
    #in pydantic the ellipses
    # (...) indicates a field is required, could be replaced with None or a default value
    studentID: str #= Field(...)
    #POLLID TO OPTIONSTRING
    pollsAnswered: dict
    role:str = 'STUDENT'
    
     
    

def selectOption(self,poll_id: str, optionString):
    #find the poll
    poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
    #submit an addOneToOption(optionString) method call to the poll object
    poll.addOneToOption(optionString)
    #add poll to users currently answered polls
    self.pollsAnswered[ObjectId(poll_id)] = optionString


def removeOption(self,poll_id: str, optionString):
    #find the poll
    poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
    #submit a removeOneToOption(optionString) method call to the poll object
    poll.removeOneToOption(optionString)
    #remove poll from  users currently answered polls
    del self.pollsAnswered[ObjectId(poll_id)]

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
    #get pre-existing polls based on lastEdited?
    pass

