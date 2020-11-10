/* eslint-disable no-useless-constructor */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import './Abilities.css';
import EventContext from '../../../contexts/EventContext';

export default class Abilities extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps={
    abilities: []
  }

  static contextType=EventContext;

  handleAbility=(e) => {
    e.preventDefault();
    console.log(e.target.value)
    //Send ability choice to server
    this.context.sendChoice(e.target.value)
    console.log(`${e.target.value} cast!`)

  }

  generateAbilityList() {
    return this.props.abilities.map((ability, index) => {
      if(ability.type) {
        return (
          <div key={index}>
            <ReactTooltip id={ability.name} place='top' effect='solid' getContent={(dataTip) => `${dataTip}`} />
            <button
              className='abl-button'
              data-tip={`${ability.desc} Cost: ${ability.cost} AP`}
              data-for={ability.name}
              onClick={e => this.handleAbility(e)}
              value={ability.name}>
              {ability.displayName}
            </button>
          </div>
        )
      }
    })
  }

  render() {
    return (
      <div className='abl-outer'>
        <div className='abl-inner'>
          {this.generateAbilityList(this.props.abilities)}
        </div>
      </div>
    )
  }
}
