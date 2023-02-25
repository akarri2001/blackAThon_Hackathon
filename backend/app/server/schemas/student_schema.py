def student_serializer(student) -> dict:
    return{
        "_id":  str(student["_id"]),
        "firstName": student["firstName"],
        "lastName": student["lastName"],
        "studentID": student["studentID"],
        "email": student["email"],
        #need to add THEIR LIST OF POLLS RESPONDED TO
        "pollsAnswered": student["pollsAnswered"]
    }

#perform the above function many times (for a list of student objects)    
def students_serializer(students) -> list:
    return [student_serializer(student) for student in students]