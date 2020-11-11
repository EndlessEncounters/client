import React from 'react';
import { Link } from 'react-router-dom';
import mntn from '../../assets/images/mountains.png'
import './HomeMain.css';


export default function Home() {
  return (
    <main>
      <h1 className='header text-pop-up-bottom'>Endless Encounters</h1>
      <div className='main-inner'>
        <h2 className='sub-head'>A place for those seeking a way to leave their world behind...</h2>
        <img src={mntn} alt='digital drawing of a mountain range in a circle frame' className='mntn' />
        <nav className='main-nav'>
          <Link className='main-link' to='/main' aria-label="Start link">Start</Link>
        </nav>
        <div className='intro'>
        <span>
        <h3>Embark on a brand new adventure in this text-based role-playing-game!</h3> 
        <p>Endless Encounters is chock-full of random enemies and witty quotes, and so you may find yourself in some 
        quirky predicaments. </p>
        <p>Once you're signed up, you can explore the world, duel swords, and meet other characters.</p></span></div>
      </div>
    </main>
  )
}
