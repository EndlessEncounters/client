/* eslint-disable no-unused-vars */
import React from 'react';
import SimplifiedViewPort from '../Viewport/SimplifiedViewport.js';
import eventService from '../../services/event-service';
import EventContext from '../../contexts/EventContext';

import './Dash.css';

//Using display state

export default class Dashboard extends React.Component {
  static defaultProps={
    character: {},
  }

  constructor(props) {
    super(props)
    const state={
      display: 'abilities',
      view: 'explore',
      displayText: [],
      combat: false
    }
    this.state=state;
  }
  static contextType=EventContext;

  handleDisplayChange=(ev) => {
    ev.preventDefault();
    this.setState({display: ev.target.value});
  }

  renderExploreOptions() {
    if(this.context.story.choices) {
      return this.context.story.choices.map((choice, index) => {
        return (
          <button key={index} value={choice.name} onClick={(e) => this.handleExploreOption(e)}>{choice.displayName}</button>
        )
      })
    }
  }

  componentDidMount=async () => {
    this.context.setStory(await eventService.getUserStory(window.localStorage.getItem('userInfo')))
    this.setState({displayText: [...this.state.displayText, <p>{this.context.story.displayText}</p>]})
  }

  render() {
    return (
      <main className='dash-main'>
        <SimplifiedViewPort displayText={this.context.story.displayText} />
        <form id='choice_form' onSubmit={async (e) => {
          e.preventDefault();
          const input=e.target.choice;
          const inputText=input.value;
          input.value='';
          const newData = await eventService.makeChoice(inputText)
          .then(res => {
            return res.json();
          })
          .then(resJ => {
            this.context.setStory(resJ);
          })
        }}>
          <input aria-label='input form rpg' name='choice' type='text' />
          <button aria-label='submit button for input form' type='submit'>Make Choice</button>
        </form>

        <div className='char-assets'>
          <div>

          </div>
        </div>

      </main>
    )
  }
}
