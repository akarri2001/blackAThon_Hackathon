#how student data will be repsesented in MongoDB database
from models.student_model import Student
from pydantic import BaseModel

class Sga(Student , BaseModel):
    pollsCreated: list