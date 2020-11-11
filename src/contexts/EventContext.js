import React from 'react';

const EventContext=React.createContext({
  story: {},
  entity: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  setStory: () => { },
  setEntity: () => { }
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

  render() {
    const value={
      story: this.state.story,
      error: this.state.error,
      setError: this.setError,
      setStory: this.setStory,
      clearError: this.clearError,
      setEvent: this.setEvent,
    }
    return (
      <EventContext.Provider value={value}>
        {this.props.children}
      </EventContext.Provider>
    )
  }
}
