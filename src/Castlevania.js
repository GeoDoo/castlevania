import React from 'react'

import audio from './assets/audio/toccata_and_fugue_D_minor.mp3'

const Castlevania = () => (
  <>
    <h1>Castlevania</h1>
    <audio id="music-score" src={audio} autoPlay loop></audio>
  </>
)

export default Castlevania
