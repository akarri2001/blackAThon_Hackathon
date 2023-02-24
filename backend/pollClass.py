from datetime import datetime
import json

class OptionNotPresentError(Exception):
    def __init__(self, optionString, pollId):
        self.message = f'ERROR: {optionString} not in pollId: {pollId}'
        super().__init__(self.message)

class OptionAlreadyPresentError(Exception):
    def __init__(self, optionString, pollId):
        self.message = f'ERROR: {optionString} already in in pollId: {pollId}'
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
    
    def removeTag(self, tagString):
        if tagString not in self.tags:
            raise TagNotPresentError(tagString, self.uniqueId)
        else:
            self.tags.remove(tagString)
            self.setNewLastEditTime()

    def addOption(self, optionString):
        if optionString in self.options:
            raise OptionAlreadyPresentError(optionString, self.uniqueId)
        else:
            self.options[optionString] = 0
            self.setNewLastEditTime()
    
    def removeOption(self, optionString):
        if optionString not in self.options:
            raise OptionNotPresentError(optionString, self.uniqueId)
        else:
            del self.options[optionString]
            self.setNewLastEditTime()
        
    def editQuestion(self, questionString):
        if questionString != '':
            self.questionString = questionString
            self.setNewLastEditTime()
    
    def getPoll_Id(self):
        return self.uniqueId
    
    def getOptions(self):
        return self.options
    
    def getTags(self):
        return self.tags

    def getCreatorId(self):
        return self.creatorId

    def toJSONFormat(self):
        return json.dumps(self.__dict__, default=str)

def main():
    poll1 = PollClass('Best College?', 'sdfjdlfjdf', 'sdkfjdlsfjdlf')

    print(poll1.getOptions())

    poll1.addOption('College of Engineering')
    # poll1.addOption('College of Engineering')
    poll1.addTag('tag1')
    poll1.addTag('tag1')
    print(poll1.toJSONFormat())

if __name__ == '__main__':
    main()