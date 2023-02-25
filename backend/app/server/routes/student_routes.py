from fastapi import APIRouter
from config.database import studentCollection
from models.student_model import Student
from models.sga_model import Sga
from models.user_model import UserClass
from models.role_model import Role
from schemas.student_schema import students_serializer, student_serializer
from schemas.sga_schema import sga_serializer
from config.database import sgaCollection
from bson import ObjectId

student_api_router = APIRouter()


@student_api_router.get("/")
async def get_page():
    return {"status": "ok"}

    
#retrieve
@student_api_router.get("/students")
async def get_students():
    students = students_serializer(studentCollection.find())
    return {"status": "ok", "data": students}

@student_api_router.get("/users/{id}")
async def get_user(id: str):
    #try finding an sga account
    account : Sga = sgaCollection.find_one({"_id": ObjectId(id)})
    #was a sga account found?
    if account:
        acc2 = sga_serializer(account)
        return {"status": "ok", "data": {"Approval": True, "data": acc2 }}
    #try finding a student account
    account : Student = studentCollection.find_one({"_id": ObjectId(id)})
    #was a student account found?
    if account:
        acc2 = student_serializer(account)
        return {"status": "ok", "data": {"Approval": True, "data": acc2}}
    #nothing found?
    return {"status": "ok", "data": {"Approval": False,}}

#SIGN UP FLOW!
@student_api_router.post("/signUp")
async def post_createAccount(user: Student):
    
    if user.role.upper() == "STUDENT":
        #convert passed data into entry, get id
        studentUser : Student = dict(user)
        studentUser["role"] = "STUDENT"
        _id = studentCollection.insert_one(dict(user))
        #return object from DB 
        student = student_serializer(studentCollection.find_one({"_id": _id.inserted_id}))
        return {"status": "ok", "data": student}
    elif user.role.upper() == "STUDENT_GOVERNMENT":
        if user.email.lower() == "dhruvsga@gmail.com":
            sgauser : Sga = dict(user)
            sgauser["pollsCreated"] = []
            sgauser["role"] = "STUDENT_GOVERNMENT"
            _id = sgaCollection.insert_one(sgauser)
            sga = sga_serializer(sgaCollection.find_one({"_id": _id.inserted_id}))
            return {"status": "ok", "data": sga}
    else:
        return {"status": "bad input"}

            


#LOGIN FLOW
#post
@student_api_router.post("/login")
async def post_login(username: str, password: str):
    #try finding an sga account
    account : Sga = sgaCollection.find_one({"username": username, "password": password})
    #was a sga account found?
    if account:
        acc2 = sga_serializer(account)
        acc2.update({"Role": "STUDENT"})
        return {"status": "ok", "data": {"Approval": True, "obj": acc2}}
    #try finding a student account
    account : Student = studentCollection.find_one({"username": username, "password": password})
    #was a student account found?
    if account:
        acc2 : Student = student_serializer(account)
        acc2.update({"Role": "STUDENT"})
        return {"status": "ok", "data": {"Approval": True, "obj": acc2}}
    #nothing found?
    return {"status": "ok", "data": {"Approval": False,}}
    