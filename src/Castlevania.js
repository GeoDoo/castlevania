import React from 'react'

import Character from './components/Character'

import Isaac from './assets/svg/heroes/Isaac.svg'
import Carmilla from './assets/svg/enemies/Carmilla.svg'
import audio from './assets/audio/toccata_and_fugue_D_minor.mp3'

import './Castlevania.pcss'

const Castlevania = () => (
  <>
    <h1>Castlevania</h1>
    <div id="hero">
      <Character assetPath={Isaac} />
    </div>
    <div id="enemy">
      <Character assetPath={Carmilla} />
    </div>
    <audio id="music-score" src={audio} autoPlay loop></audio>
  </>
)

export default Castlevania
