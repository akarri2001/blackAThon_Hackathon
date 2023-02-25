#how student data will be repsesented in MongoDB database
from models.student_model import Student
from pydantic import BaseModel
from config.database import pollsCollection
from config.database import sgaCollection

class Sga(Student , BaseModel):
    pollsCreated: list
    role:str = 'SGA'
    
    #remove an option from a poll 
    def removeOption(poll_id, optionString):
        print("placeholder")
    #add an option to a poll 
    def addOption(poll_id, optionString):
        print("placeholder")
    #add a tag to a poll
    def addTag(poll_id, tagString):
        print("")
    #remove a tag from a poll
    def removeTag(poll_id, tagString):
        print("")
    #edit question
    