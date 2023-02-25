def poll_serializer(poll) -> dict:
    return{
        "id":  str(poll["_id"]),
        "questionString":  poll["questionString"],
        "uniqueId": poll["uniqueId"],
        "creatorId": poll["creatorId"],
        "options":  poll["options"],
        "lastEdited": poll["lastEdited"],
        "tags": poll["tags"]
    }

#perform the above function many times (for a list of poll objects)    
def polls_serializer(polls) -> list:
    return [poll_serializer(poll) for poll in polls]