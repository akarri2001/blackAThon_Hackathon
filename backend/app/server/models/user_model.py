from abc import ABC
from pydantic import BaseModel
from models.role_model import Role

class UserClass(ABC, BaseModel):
    firstName: str #= Field(...)
    lastName: str #= Field(...)
    email: str
    username: str
    password: str
    role : str = "USER"
    
    
        
    

