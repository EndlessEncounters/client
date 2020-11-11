import useSound from 'use-sound';
import React from 'react';
import '../DashboardMain/Dash.css'
export default function SwitchTabButton(props) {
  const switches=require('../../assets/sounds/music/switches.wav');
  const [play]=useSound(switches)
  const playSound=function () {
    play();
  }

  const passedFunc=function (ev) {
    ev.preventDefault();
    playSound();
    props.props.func(ev);
  }
  return (
    <button className='dashBtn' value={props.props.tabName} onClick={(ev) => passedFunc(ev)}>
      {props.props.name}
    </ button>);
}
