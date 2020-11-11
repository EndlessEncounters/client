import React from 'react';
import Accordion from '../../components/AccordionBtn/AccordionBtn';
import {Link} from 'react-router-dom'
import mntn from '../../assets/images/mountains.png';
import './About.css'

export default function About() {

  const specials=` ! ' # $ % & ' ( ) * + , - . / : ; < = > ? @ [  ] ^ _ { | } ~ `
  const upperNum=`If you can do this PLEASE send us an email because we haven't seen one yet!`
  let aboutData=[
    {
      header: (
        <h3 className='question'>
          What is Endless Encounters?
        </h3>
      ),
      content: (
        <div>
          <span>Endless Encounters is a text-base RPG developed by EE; John Pendergast, Alexis Felts, Scott Whiteman, and Tiffany Summerford. Once you're in, you can explore in search of ravenous enemies to duel swords with or visit the tavern to discuss rumors.</span>
        </div>
      )
    },
    {
      header: (
        <h3 className='question'>
          How do I sign up?
        </h3>
      ),
      content: (
        <div>
          <p>Creating an account is simple:</p>
          <ol>
            <li>Click the register link above</li>
            <li>Enter a fun and unique Username</li>
            <li>Enter a memorable password with at least one of each:
            <ul>
                <li>A special character</li>
                <li>An upper case letter</li>
                <li>A lower case letter</li>
                <li>A number</li>
                <li>Bonus points for upper/lower case numbers</li>
              </ul>
            </li>
            <li>Enter an email that you use</li>
            <li>Wait for a verification email to arrive in your inbox</li>
            <li>Click the verification link in the email</li>
            <li>Navigate back to Endless Encounters, login, and have fun!</li>
          </ol>
        </div>
      )
    },
    {
      header: (
        <h3 className='question'>
          How Do I Create my Character?
        </h3>
      ),
      content: (
        <div>
          <p>Upon completing your registration, and logging in you'll be pushed to the user dashboard where you'll be prompted to create your first character. </p>
          <ol>
            <li>Give your character a name (all Alpha-Numeric Characters are valid).</li>
            <li> Assign your character's stat-points (be sure to add some points to each attribute). </li>
            <li>You may choose from several abilities when you first begin your journey. </li>
            <li>Clicking on the 'Finalize Character Button' will create your character and you may only have one active character (per-account) at a time.</li>
          </ol>
        </div>
      )
    },
    {
      header: (
        <h3 className='question'>
          Navigating
        </h3>
      ),
      content: (
        <div>
          <p>After creating your character, you'll immediately be enveloped with Endless Encounters.</p>
          <ul>
            <li>On the dash, you'll be presented with some action choices in the middle-left portion of your dashboard (the 'explore' and 'tavern' buttons).</li>
            <li>Upon hovering over an option in the dashboard, you can see an explanation of what that choice/action will do.</li>
            <li>Clicking on actions could push you into duels or happen you upon a treasure, and whatever consequences occur from that are now tied to your character!</li>
            <li>Be careful, make good choices, or don't.</li>
          </ul>
        </div>
      )
    },
    {
      header: (
        <h3 className='question'>
          Combat
        </h3>
      ),
      content: (
        <div>
          <span>Combat is turn-based; on your turn, you may click on one of your character's abilities or spells' to perform against your target.
          Your character will then attempt the action, with the chance to miss, hit, or completely obliterate their enemy.
          Each hit to your opponent will result in damage to their health. Abilities and spells have cost, so make sure you have enough
          (health, mana, and ability) to perform this action. Keep a heads up for
            critical misses or hits.</span>
        </div>
      )
    }
  ]

  function aboutLoop() {
    let html=[];
    for(const index in aboutData) {
      html.push(
        <Accordion
          key={index}
          header={aboutData[index].header}
          content={aboutData[index].content}
        />
      );
    }
    return html;
  }

  return (
    <main className='abt-outer'>
      <h1 className='header'>Endless Encounters</h1>
      <div className='abt-inner'>
        <h2 className='sub-head'>A place for those seeking a way to leave their world behind...</h2>
        <img src={mntn} alt='digital drawing of a mountain range in a circle frame' className='mntn' />
        <section className='abt-sect'>
          {aboutLoop()}
        </section>
      </div>
    </main>
  )
}
