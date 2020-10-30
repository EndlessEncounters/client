/* eslint-disable no-unused-vars */
import React from 'react';
import Viewport from '../../Viewport/Viewport';
import CharStatCard from '../CharacterStatCard/CharacterStatCard';
import Abilities from '../Abilities/Abilities';
import EventContext from '../../../contexts/EventContext';
import SwitchTabSound from '../../SoundWidgets/SwitchTabSound';
import {Transition, animated} from 'react-spring/renderprops';

import storyDummy from '../../../storyDummy';
import './Dash.css';

//Using display state
const tabs={
  abilities: style => (<animated.div style={{...style}}><Abilities /></animated.div>),
}

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

  tabs={
    abilities: style => (<animated.div style={{...style}}><Abilities abilities={this.props.character.abilities} /></animated.div>),
  }

  handleExploreOption=(e) => {
    e.preventDefault();
    //Should send 'choice' to backend here and receive story
    const value=e.target.value;
    this.context.sendChoice(value)
      .then(res => {
        if(value!==this.state.view) {
          this.setState({
            view: value,
            displayText: [<p>{this.context.story.displayText}</p>],
            combat: this.context.story.combat
          });
        } else {
          this.setState({
            displayText: [...this.state.displayText, <p>{this.context.story.displayText}</p>],
            combat: this.context.story.combat
          });
        }
      })
  }

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

  renderTabButtons() {
    const tabs=[
      {name: 'Abilities', tabName: 'abilities', func: this.handleDisplayChange}
    ]
    return tabs.map((tab, index) => <SwitchTabSound props={tab} key={index} />)
  }

  componentDidMount=() => {
    this.context.setStory(storyDummy)
    this.setState({displayText: [...this.state.displayText, <p>{this.context.story.displayText}</p>]})
  }

  render() {
    console.log(this.props.character)
    return (
      <main className='dash-main'>
        <Viewport
          // Combat view
          view={this.state.combat? this.state.combat
            // Level Up view
            :this.props.character.statPoints? 'levelUp'
              // Non combat view
              :this.state.view}
          displayText={this.state.displayText}
          character={this.props.character} />
        <div className='nav-btns'>
          {!this.state.combat&&this.renderExploreOptions()}
          {this.renderTabButtons()}
        </div>
        <div className='char-assets'>
          <CharStatCard

            stats={this.props.character['stats']}
            pools={{
              name: this.props.character.name,
              hp: this.props.character['hp'],
              hpMax: this.props.character['max_hp'],
              mp: this.props.character['mp'],
              mpMax: this.props.character['max_mp'],
              ap: this.context.story['ap'],
              apMax: 10
            }} />
          <div className='trans-container'>
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
          </div>
        </div>

      </main>
    )
  }
}
