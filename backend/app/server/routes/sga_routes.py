from fastapi import APIRouter
from config.database import sgaCollection
from models.sga_model import Sga
from schemas.sga_schema import sga_serializer, sgaList_serializer
from bson import ObjectId

sga_api_router = APIRouter()

#retrieve
@sga_api_router.get("/sga")
async def get_sgaMembers():
    sga = sgaList_serializer(sgaCollection.find())
    return {"status": "ok", "data": sga}

@sga_api_router.get("/sga/{id}")
async def get_sgaMembert(id: str):
    sga =  sgaList_serializer(sgaCollection.find({"_id": ObjectId(id)}))
    return {"status": "ok", "data": sga}

#post
@sga_api_router.post("/sga")
async def post_sgaAccount(sga: Sga):
    _id = sgaCollection.insert_one(dict(sga))
    sga = sga_serializer(sgaCollection.find_one({"_id": _id.inserted_id}))
    return {"status": "ok", "data": sga}

    