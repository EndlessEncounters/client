/* eslint-disable no-useless-constructor */
import React from 'react';
import Tavern from '../Tavern/Tavern';
import Explore from '../Explore/Explore';
import Combat from '../Combat/Combat';
import './Viewport.css';
import EventContext from '../../contexts/EventContext';
import LevelUp from '../LevelUp/LevelUp';

export default class Viewport extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType=EventContext;

  //Place holder for Level up event
  //Render this to viewport on level ups if there is no time
  renderLevelUp() {
    return <LevelUp
      points={this.props.character.statPoints}
      stats={this.props.character.stats} />
  }

  renderExplore() {
    return <Explore displayText={this.props.displayText} />
  }

  renderCombat=() => {
    const dummyOpp=[
      {
        name: 'Gobber'
      },
      {
        name: 'Gobber'
      },
      {
        name: 'Drunk-erd'
      }
    ];
    return <Combat opponents={dummyOpp} />
  }

  componentDidMount=() => {

  }

  render() {

    return (
      <div className='viewport border'>
        {this.props.view==='levelUp'&&this.renderLevelUp()}
        {this.props.view!=='levelUp'&&this.renderExplore()}
      </div>
    )
  }
}
