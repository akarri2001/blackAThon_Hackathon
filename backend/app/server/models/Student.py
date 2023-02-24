from typing import Optional
from pydantic import BaseModel, EmailStr, Field


#how student data will be repsesented in MongoDB database
class StudentScheme(BaseModel):
    #in pydantic the ellipses (...) indicates a field is required, could be replaced with None or a default value
    firstName: str = Field(...)
    lastName: str = Field(...)
    email: EmailStr = Field(...)
    
    
    