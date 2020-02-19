const {
  mathMax,
  playerUserPicked,
  checkIfPlayerScoreNull
} = require('./test.functions.js');


let stephenCurry = {
  first_name: 'Stephen',
  last_name: 'Curry',
  fppg: 47.94303797468354
}

let klayThompson = {
  first_name: 'Klay',
  last_name: 'Thompson',
  fppg: 30.839999999999996
}

let playerPickedCurry = {
  first_name: 'Stephen',
  last_name: 'Curry',
  fppg: 47.94303797468354
}

let dorellWright = {
  first_name: 'Dorell',
  last_name: 'Wright',
  fppg: null
}

test('Steph Curry higher than Klay Thompson to check if checkScores higherScore is returning correct player that is higher', () => {
  expect(mathMax(stephenCurry.fppg, klayThompson.fppg)).toBe(stephenCurry.fppg);
})

test('Player picked Stephen Curry and will test if they match with users picked fppg', () => {
  expect(playerUserPicked(stephenCurry.fppg, playerUserPicked.fppg)).toBe(playerUserPicked.fppg)
})

test('If player fppg score is null then return a Zero', () => {
  expect(checkIfPlayerScoreNull(dorellWright.fppg)).toEqual(0)
})

