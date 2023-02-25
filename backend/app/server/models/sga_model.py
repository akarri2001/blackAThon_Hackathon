#how student data will be repsesented in MongoDB database
from models.student_model import Student
from models.poll_model import PollClass
from pydantic import BaseModel
from config.database import pollsCollection
from config.database import sgaCollection
from bson import ObjectId

class Sga(Student , BaseModel):
    pollsCreated: list
    role:str = 'SGA'
    
    #remove an option from a poll 
    def removeOption(poll_id, optionString):
        #find the poll
        poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
        print("placeholder")
    #add an option to a poll 
    def addOption(poll_id, optionString):
        #find the poll
        poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
        print("placeholder")
    #add a tag to a poll
    def addTag(poll_id, tagString):
        #find the poll
        poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
        print("")
    #remove a tag from a poll
    def removeTag(poll_id, tagString):
        #find the poll
        poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
        print("")
    #edit question
    