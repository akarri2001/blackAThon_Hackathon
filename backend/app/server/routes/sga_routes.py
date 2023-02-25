from fastapi import APIRouter
from config.database import sgaCollection
from models.student_model import 
from schemas.sga_schema import sga_serializer, sgaList_serializer
from bson import ObjectId

sga_api_router = APIRouter()

#retrieve
@sga_api_router.get("/sga")
async def get_sga():
    sga = sga_serializer(sgaCollection.find())
    return {"status": "ok", "data": students}

@sga_api_router.get("/students/{id}")
async def get_student(id: str):
    student =  students_serializer(studentCollection.find({"_id": ObjectId(id)}))
    return {"status": "ok", "data": student}

#post
@sga_api_router.post("/students")
async def post_todo(student: Student):
    _id = studentCollection.insert_one(dict(student))
    student = student_serializer(studentCollection.find_one({"_id": _id.inserted_id}))
    return {"status": "ok", "data": student}

    