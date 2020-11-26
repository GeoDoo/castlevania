import React from 'react'

import Character from './components/Character'
import LifeMeter from './components/LifeMeter'
import Die from './components/Die'
import Button from './components/Button'

import { roll } from './utils/roll'

import Isaac from './assets/svg/heroes/Isaac.svg'
import Carmilla from './assets/svg/enemies/Carmilla.svg'
import audio from './assets/audio/toccata_and_fugue_D_minor.mp3'

import './Castlevania.pcss'

const Castlevania = () => (
  <>
    <h1>Castlevania</h1>
    <div id="score">
      <LifeMeter name="Isaac" />
      <LifeMeter name="Carmilla" reversed />
    </div>
    <div id="cast-dice">
      <div>
        <Die side={roll()} />
        <Die side={roll()} />
      </div>
      <div>
        <Die side={roll()} />
        <Die side={roll()} />
      </div>
    </div>
    <div id="hero">
      <div id="controls">
        <Button text="Attack" />
      </div>
      <Character figure={Isaac} />
    </div>
    <div id="enemy">
      <Character figure={Carmilla} />
    </div>
    <audio id="music-score" src={audio} autoPlay loop></audio>
  </>
)

export default Castlevania
