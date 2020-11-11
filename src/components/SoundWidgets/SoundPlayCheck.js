import useSound from 'use-sound';
import React, {useState} from 'react';

export default function SoundPlayCheck() {
  const title=require('../../assets/sounds/music/title.wav');
  const [play, {stop}]=useSound(title, {
    interrupt: true, onend: () => {play()}
  });
  const [playing, setPlay]=useState(false)

  const handlePlay=function () {
    if(playing) stop();
    if(!playing) play();
    setPlay(!playing)
  }

  return <form onChange={handlePlay}>
    {!playing&&<label htmlFor='sound'>Play Sound?</label>}
    {playing&&<label htmlFor='sound'> Playing</label>}
    <input name='sound' id='sound' type='checkbox' />
  </form>;
};
