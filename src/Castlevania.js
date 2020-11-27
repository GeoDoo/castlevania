import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Character from './components/Character'
import LifeMeter from './components/LifeMeter'
import Die from './components/Die'
import Button from './components/Button'

import actions from './store/actions'

import Isaac from './assets/svg/heroes/Isaac.svg'
import Carmilla from './assets/svg/enemies/Carmilla.svg'
import audio from './assets/audio/toccata_and_fugue_D_minor.mp3'

import './Castlevania.pcss'

const Castlevania = () => {
  const health = useSelector(state => state.health)
  const messages = useSelector(state => state.messages)
  const ui = useSelector(state => state.ui)
  const dice = useSelector(state => state.dice)
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(actions.setIsHeroDiceShown())
    dispatch(actions.setDice('hero'))

    setTimeout(() => {
      dispatch(actions.setIsFoeDiceShown())
      dispatch(actions.setDice('foe'))
    }, 1000)
  }

  return (
    <>
      <h1>Castlevania</h1>
      <div id="score">
        <LifeMeter name="Isaac" health={health.hero} />
        <LifeMeter name="Carmilla" health={health.foe} reversed />
      </div>
      <div id="cast-dice">
        {ui.isHeroDiceShown && (
          <div>
            <Die side={dice.hero[0]} />
            <Die side={dice.hero[1]} />
          </div>
        )}
        {ui.isFoeDiceShown && (
          <div>
            <Die side={dice.foe[0]} />
            <Die side={dice.foe[0]} />
          </div>
        )}
      </div>
      {ui.isOutcomeMessageShown && <div id="outcome">{messages.outcome}</div>}
      {ui.isHitMessageShown && <div id="hit">{messages.hit}</div>}
      <div id="hero">
        <div id="controls">
          <Button text="Attack" onClick={onClick} />
        </div>
        <Character figure={Isaac} />
      </div>
      <div id="enemy">
        <Character figure={Carmilla} />
      </div>
      <audio id="music-score" src={audio} autoPlay loop></audio>
    </>
  )
}

export default Castlevania
