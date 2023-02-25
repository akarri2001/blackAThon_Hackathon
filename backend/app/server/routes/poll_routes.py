from fastapi import APIRouter
from config.database import pollsCollection
from models.poll_model import PollClass
from schemas.poll_schema import poll_serializer, polls_serializer
from bson import ObjectId

poll_api_router = APIRouter()

#retrieve
@poll_api_router.get("/polls")
async def get_polls():
    polls = polls_serializer(pollsCollection.find())
    return {"status": "ok", "data": polls}

@poll_api_router.get("/polls/{id}")
async def get_poll(id: str):
    poll =  polls_serializer(pollsCollection.find({"_id": ObjectId(id)}))
    return {"status": "ok", "data": poll}

#post
@poll_api_router.post("/polls")
async def post_poll(poll: PollClass):
    _id = pollsCollection.insert_one(dict(poll))
    poll = poll_serializer(pollsCollection.find_one({"_id": _id.inserted_id}))
    return {"status": "ok", "data": poll}

    