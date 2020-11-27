const calculateDamage = (heroDice, foeDice) =>
  heroDice[0] + heroDice[1] - foeDice[0] - foeDice[1]

export default calculateDamage
