import React from 'react'

import Character from './components/Character'
import LifeMeter from './components/LifeMeter'

import Isaac from './assets/svg/heroes/Isaac.svg'
import Carmilla from './assets/svg/enemies/Carmilla.svg'
import audio from './assets/audio/toccata_and_fugue_D_minor.mp3'

import './Castlevania.pcss'

const Castlevania = () => (
  <>
    <h1>Castlevania</h1>
    <div id="score">
      <LifeMeter name="Isaac" />
      <LifeMeter name="Carmilla" />
    </div>
    <div id="hero">
      <Character figure={Isaac} />
    </div>
    <div id="enemy">
      <Character figure={Carmilla} />
    </div>
    <audio id="music-score" src={audio} autoPlay loop></audio>
  </>
)

export default Castlevania
