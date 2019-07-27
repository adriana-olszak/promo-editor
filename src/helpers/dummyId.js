// Just for sake of generating some uniqueness on acceptable level
// for this kind of POV
// on production level such code would be never used.

export const generateId = () =>
  Math.floor(Math.random() * 10000000) +
  '_' +
  Math.floor(Math.random() * 10000000)
