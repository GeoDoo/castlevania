import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Character from './components/Character'
import LifeMeter from './components/LifeMeter'
import Die from './components/Die'
import Button from './components/Button'

import actions from './store/actions'

import { roll } from './utils/roll'
import calculateDamage from './helpers'

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
    const heroDice = [roll(), roll()]
    const foeDice = [roll(), roll()]

    dispatch(actions.setIsHeroDiceShown())
    dispatch(actions.setDice('hero', heroDice))

    const heroCastTimer = setTimeout(() => {
      dispatch(actions.setIsFoeDiceShown())
      dispatch(actions.setDice('foe', foeDice))
    }, 1000)

    const foeCastTimer = setTimeout(() => {
      const damage = calculateDamage(heroDice, foeDice)

      if (damage > 0) {
        dispatch(actions.setHealth('foe', damage))
        dispatch(actions.setMessage(`You hit for ${damage}!`))
      }

      if (damage < 0) {
        dispatch(actions.setHealth('hero', -damage))
        dispatch(actions.setMessage(`Ouch! You got hit for ${-damage}!`))
      }

      if (damage === 0) {
        dispatch(actions.setMessage('Draw!!'))
      }

      dispatch(actions.setIsHitMessageShown())
    }, 2000)

    const resetTimer = setTimeout(() => {
      dispatch(actions.reset())

      clearTimeout(heroCastTimer)
      clearTimeout(foeCastTimer)
      clearTimeout(resetTimer)
    }, 3000)
  }

  const isEndGame = health.hero === 0 || health.foe === 0
  const isWin = health.foe === 0
  const isLoss = health.hero === 0

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
            <Die side={dice.foe[1]} />
          </div>
        )}
      </div>
      {ui.isHitMessageShown && <div id="hit">{messages.hit}</div>}
      <div id="hero">
        <div id="controls">
          <Button
            text="Attack"
            onClick={onClick}
            disabled={ui.isAttackDisabled}
          />
        </div>
        <Character figure={Isaac} />
      </div>
      <div id="enemy">
        <Character figure={Carmilla} />
      </div>
      <audio id="music-score" src={audio} autoPlay loop></audio>
      <div id="outcome" className={isEndGame ? 'fixed' : ''}>
        {isWin && <div className="green win">YOU WIN!</div>}
        {isLoss && <div className="red lose">GAME OVER</div>}
      </div>
    </>
  )
}

export default Castlevania
