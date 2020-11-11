import EventContext from '../contexts/EventContext';
import EventService from '../services/event-service'

function sendChoice(choice) {
  EventService.postEvent(choice)
    .then(res => {
      EventContext.setStory(res)
    })
}

function testContext() {
  console.log(EventContext.story);
}

export default {
  sendChoice,
  testContext
}