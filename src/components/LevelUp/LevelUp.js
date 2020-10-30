import React from 'react';
import EventContext from '../../contexts/EventContext';
import './LevelUp.css';

export default class LevelUp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stats: this.props.stats,
      points: this.props.points
    }
  }

  static defaultProps={
    stats: {
      str: 1,
      dex: 1,
      int: 1,
      sta: 1,
      agi: 1,
      will: 1
    },
    points: 1
  }
  static contextType=EventContext;

  handleStatIncrease(key, value) {
    //Send stat post to back end here


    const newStats=this.state.stats;
    newStats[key]++;
    this.setState({
      stats: newStats,
      points: this.state.points-1
    });
  }

  renderStats() {
    let stats=[];
    for(const [key, value] of Object.entries(this.state.stats)) {
      const htmlStat=<li className='stat'>
        <div className='stat-name'>{key}:</div>
        <div className='stat-value'>
          {value}
          {this.state.points>0&&<button className='stat-button' onClick={() => this.handleStatIncrease(key, value)}>+</button>}
        </div>
      </li>
      stats.push(htmlStat);
    }
    return (
      <div className='primary-stats'>
        <ul className='stat-list'>
          {stats}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <section className='level-up'>
        <h3 className='level-header'>Level Up!</h3>
        <p className='level-text'>Choose a stat to increase</p>
        <p className='level-text'>You have: {this.state.points} points left</p>
        {this.renderStats()}
        <p style={{margin: 'auto', textAlign: 'center', width: 'auto'}}>
          {/* <button disabled={this.state.points}>
            Continue
          </button> */}
        </p>
      </section>
    )
  }
}
