from fastapi import FastAPI
from routes.student_routes import student_api_router
from routes.poll_routes import poll_api_router
from routes.sga_routes import sga_api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#students api
app.include_router(student_api_router)
#poll objects api
app.include_router(poll_api_router)
#sga api
app.include_router(sga_api_router)