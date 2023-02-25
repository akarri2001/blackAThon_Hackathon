from abc import ABC
from pydantic import BaseModel
from models.role_model import Role 

class UserClass(ABC, BaseModel):
    firstName: str #= Field(...)
    lastName: str #= Field(...)
    email: str
    username: str
    password: str
    role: Role
    
    def __init__(self, firstName, lastName, email, username, password):
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.username = username
        self.password = password
        self.role = Role.user
        
    

