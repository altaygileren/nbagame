function mathMax(a, b) {
  return Math.max(a, b)
}

function playerUserPicked(a, b) {
  if (a === b) {
    return true
  }
}

function checkIfPlayerScoreNull(fppg) {
  let zero = 0;
  if (fppg === null) {
    return zero
  }
}

module.exports = { mathMax, playerUserPicked, checkIfPlayerScoreNull };