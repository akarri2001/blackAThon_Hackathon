from fastapi import APIRouter
from config.database import studentCollection
from models.student_model import Student
from models.sga_model import Sga
from schemas.student_schema import students_serializer, student_serializer
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

@student_api_router.get("/students/{id}")
async def get_student(id: str):
    student =  students_serializer(studentCollection.find({"_id": ObjectId(id)}))
    return {"status": "ok", "data": student}

#post
@student_api_router.post("/students")
async def post_createAccount(student: Student):
    #convert passed data into entry, get id
    _id = studentCollection.insert_one(dict(student))
    #return object from DB 
    student = student_serializer(studentCollection.find_one({"_id": _id.inserted_id}))
    return {"status": "ok", "data": student}


#LOGIN FLOW
#post
@student_api_router.post("/login")
async def post_login(username: str, password: str):
    #try finding a student account
    account : Student = studentCollection.find_one({"username": username, "password": password})
    #was a student account found?
    if account:
        return {"status": "ok", "data": {"Approval": True, "_id": account._id}}
    #try finding an sga account
    account : Sga = sgaCollection.find_one({"username": username, "password": password})
    #was a student account found?
    if account:
        return {"status": "ok", "data": {"Approval": True, "_id": account._id}}
    #nothing found?
    return {"status": "ok", "data": {"Approval": False,}}
    