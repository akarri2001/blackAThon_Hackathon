from pymongo import MongoClient
from pymongo.server_api import ServerApi


#ATTEMPT ONE - using python 3.6 suggested code...


client = MongoClient("mongodb+srv://dhruvsadhuofficial:clusterfucker@pollcluster.qmhdkfs.mongodb.net/?retryWrites=true&w=majority")
db = client.student_application

#STUDENTS
studentCollection = db["students_app"]
#POLLS
pollsCollection = db["polls_app"]
print("FIND ME DHRUV")
#STUDENT GOV 
sgaCollection = db["sga_app"]