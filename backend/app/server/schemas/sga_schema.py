def sga_serializer(sga) -> dict:
    return{
        "id":  str(sga["_id"]),
        "firstName": sga["firstName"],
        "lastName": sga["lastName"],
        "studentID": sga["studentID"],
        "email": sga["email"]
        #NEED TO ADD THEIR LIST OF POLLS CREATED AND THEIR LIST OF POLLS RESPODNED TO
    }

#perform the above function many times (for a list of studentGov objects)    
def sgaList_serializer(sgaList) -> list:
    return [sga_serializer(sga) for sga  in sgaList]