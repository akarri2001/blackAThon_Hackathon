from pydantic import BaseModel
class Role(BaseModel):
        user = "USER"
        student = "STUDENT"
        sga = "STUDENT_GOVERNMENT"
    

    