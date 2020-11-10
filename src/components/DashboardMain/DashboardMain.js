/* eslint-disable no-unused-vars */
import React from 'react';
import SimplifiedViewPort from '../Viewport/SimplifiedViewport.js';
import eventService from '../../services/event-service';
import EventContext from '../../contexts/EventContext';
import SwitchTabSound from '../SoundWidgets/SwitchTabSound';
import {Transition, animated} from 'react-spring/renderprops';


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

  // handleExploreOption=(e) => {
  //   e.preventDefault();
  //   //Should send 'choice' to backend here and receive story

  //   //Response from backend
  //   this.context.setStory(storyDummy);
  //   if(e.target.value!==this.state.view) {
  //     this.setState({
  //       view: e.target.value,
  //       displayText: [<p>{this.context.story.displayText}</p>],
  //       combat: this.context.story.combat
  //     });
  //   } else {
  //     this.setState({
  //       displayText: [...this.state.displayText, <p>{this.context.story.displayText}</p>],
  //       combat: this.context.story.combat
  //     })
  //   }
  // }

  handleDisplayChange=(ev) => {
    ev.preventDefault();
    this.setState({display: ev.target.value});
  }

  renderExploreOptions() {
    if(this.context.story.choices) {
      for(const choice in this.context.story.choices) {
        return (
          <button key={choice} value={choice.name} onClick={(e) => this.handleExploreOption(e)}>{choice.displayName}</button>
        )
      }
    }
  }

  renderTabButtons() {
    const tabs=[
      {name: 'Abilities', tabName: 'abilities', func: this.handleDisplayChange}
    ]
    return tabs.map((tab, index) => <SwitchTabSound props={tab} key={index} />)
  }

  componentDidMount=async () => {

    this.context.setStory(await eventService.getUserStory(window.localStorage.getItem('userInfo')))
    this.setState({displayText: [...this.state.displayText, <p>{this.context.story.displayText}</p>,]})
    this.setState({displayText: [...this.state.displayText, <p>{this.context.story.choices.desc}</p>]})
  }

  render() {
    return (
      <main className='dash-main'>
        <SimplifiedViewPort displayText={this.context.story.displayText} />
        <p>{this.context.choices}</p>
        <form id='choice_form' onSubmit={async (e) => {
          e.preventDefault();
          const input=e.target.choice;
          const inputText=input.value;
          input.value='';
          this.context.setStory(await eventService.makeChoice(inputText));
        }}>
          <input name='choice' type='text' />
          <button type='submit'>Make Choice</button>
        </form>

        <div className='nav-btns'>
          {!this.state.combat&&this.renderExploreOptions()}
          {this.renderTabButtons()}
        </div>
        <div className='char-assets'>
          <div>

          </div>

          {/* <CharStatCard

            stats={this.props.character['stats']}
            pools={{
              name: this.props.character.name,
              hp: this.props.character['hp'],
              hpMax: this.props.character['max_hp'],
              mp: this.props.character['mp'],
              mpMax: this.props.character['max_mp'],
              ap: this.context.story['ap'],
              apMax: 10
            }} /> */}


          {/* <div className='trans-container'>
            <Transition
              reset
              unique
              items={this.state.display}
              from={{position: 'absolute', opacity: 0, transform: `perspective(2000px) translate3d(0%, 0, 0) rotateY(${0}deg)`}}
              enter={{position: 'initial', opacity: 1, transform: `perspective(2000px) translate3d(0%, 0, 0) rotateY(${0}deg)`}}
              leave={{top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', opacity: 0, transform: `perspective(800px) translate3d(-50%, 0, 0) rotateY(${-90}deg)`}}
            >
              {display => this.tabs[display]}
            </Transition>
          </div> */}

        </div>

      </main>
    )
  }
}
