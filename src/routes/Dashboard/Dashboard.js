import React from 'react';
import DashboardMain from '../../components/DashBoardComponents/DashboardMain/DashboardMain';
import CharacterContext from '../../contexts/CharacterContext';
import CharacterService from '../../services/character-service';
import character from '../../charDummy'

export default class Dashboard extends React.Component {
  static contextType=CharacterContext;

  handleCreate=(e) => {
    //Should send selected character as choice
    this.context.setCharacter(character)
  }

  componentDidMount=() => {
    CharacterService.getUserCharacter()
      .then(res => {
        CharacterService.getEntity(res[0].entity)
          .then(res => {
            this.context.setCharacter(res)
          })
      })
  }

  //Either place "this.character.context" for server data or 'character' for dummyData
  render() {
    return (
      <>
        {!this.context.character.name&&
          <div>
            <h2>Choose a class:</h2>
            <form onSubmit={(e) => this.handleCreate(e)} style={{margin: '0 100px'}}>
              <label htmlFor='class'>Class: </label>
              <input name='class' type='text' />
              <label htmlFor='name'>Name: </label>
              <input name='name' type='text' />
              <label htmlFor='desc'>Description: </label>
              <input name='desc' type='text' />
              <button type='submit'>
                Create New Character
              </button>
            </form>
          </div>}
        {this.context.character.name&&<DashboardMain character={this.context.character} />}
      </>
    )
  }
}
