/* eslint-disable no-unused-vars */
import React from 'react';
import HomeMain from '../../components/HomeMain/HomeMain';
import CharacterService from '../../services/character-service';
import CharacterContext from '../../contexts/CharacterContext';
import UserContext from '../../contexts/UserContext';

export default class Home extends React.Component {
  static contextType=UserContext;
  render() {
    return (
      <HomeMain />
    )
  }
}
