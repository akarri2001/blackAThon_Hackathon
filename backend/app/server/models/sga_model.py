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
    
    def createPoll():
        print("do i need this?")
    #remove an option from a poll 
    def removeOption(self, poll_id, optionString):
        #find the poll
        poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
        del poll.options[optionString]
    #add an option to a poll 
    def addOption(self, poll_id, optionString):
        #find the poll
        poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
        poll.options[optionString] = 0
    #add a tag to a poll
    def addTag(self, poll_id, tagString):
        #find the poll
        poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
        poll.addTag(tagString)
    #remove a tag from a poll
    def removeTag(self, poll_id, tagString):
        #find the poll
        poll : PollClass = pollsCollection.find_one({"_id": ObjectId(poll_id)})
        poll.removeTag(tagString)
    #retrieve all the polls this sga member has created
    def getCreatedPolls(self):
        return self.pollsCreated
    
    # def deletePoll(self, poll_id):