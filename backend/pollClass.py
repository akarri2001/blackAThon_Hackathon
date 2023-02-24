from datetime import datetime


class OptionNotPresentError(Exception):
    def __init__(self, optionString, pollId):
        self.message = f'ERROR: {optionString} not in pollId: {pollId}'
        super().__init__(self.message)

class TagNotPresentError(Exception):
    def __init__(self, tagString, pollId):
        self.message = f'ERROR: {tagString} not in pollId: {pollId}' 
        super().__init__(self.message)

class PollClass():

    def __init__(self, questionString, uniqueId, creatorId, options = {}, tags = set()):
        self.questionString = questionString
        self.uniqueId = uniqueId
        self.creatorId = creatorId
        self.options = options
        self.lastEdited = datetime.now()
        self.tags = tags

    def setNewLastEditTime(self):
        self.lastEdited = datetime.now()

    def addOneToOption(self, optionString):
        if optionString in self.options:
            self.options[optionString] += self.options.get(optionString, 0)
            self.setNewLastEditTime()
        else:
            raise OptionNotPresentError(optionString, self.uniqueId)
    
    def removeOneToOption(self, optionString):
        if optionString in self.options:
            self.options[optionString] -= self.options.get(optionString, 0)
            self.setNewLastEditTime()
        else:
            raise OptionNotPresentError(optionString, self.uniqueId)
    
    def addTag(self, tagString):
        if tagString not in self.tags:
            self.tags.add(tagString)
            self.setNewLastEditTime()
    
    
    
