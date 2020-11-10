/* eslint-disable no-unused-vars */
import React from 'react';
import EventService from '../services/event-service';


const EventContext=React.createContext({
  story: {},
  entity: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  setStory: () => { },
  setEntity: () => { },
  sendChoice: () => { }
});

export default EventContext;

export class EventProvider extends React.Component {
  constructor(props) {
    super(props)
    const state={
      story: {},
      entity: {},
      error: null
    }

    this.state=state;
  }

  setError=(error) => {
    console.error(error);
    this.setState({error});
  }
  clearError=() => {
    this.setState({error: null});
  }

  setStory=(story) => {
    this.setState({story});
  }

  setEntity=(entity) => {
    this.setState({entity});
  }

  sendChoice=(choice) => {
    EventService.postEvent(choice)
      .then(res => {
        //insert "res" in place of "storyDummy" after server connected
        this.setStory(res);
        return res;
      });
  }

  render() {
    const value={
      story: this.state.story,
      error: this.state.error,
      setError: this.setError,
      setStory: this.setStory,
      clearError: this.clearError,
      setEvent: this.setEvent,
      sendChoice: this.sendChoice
    }
    return (
      <EventContext.Provider value={value}>
        {this.props.children}
      </EventContext.Provider>
    )
  }
}
