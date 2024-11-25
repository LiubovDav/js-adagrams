export const drawLetters = () => {
  // Implement this method for wave 1

  const LETTER_POOL = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1
  };

  let lettersInHand = [];
  let lettersList = [];
  let count = 0;

  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      lettersList.push(letter);
    }
  }

  while (count < 10) {
    let randomLetterIndex = Math.floor(Math.random() * lettersList.length);
    lettersInHand.push(lettersList[randomLetterIndex]);
    lettersList.splice(randomLetterIndex, 1);
    count++;
  }

  // console.log('************************************');
  // console.log(lettersInHand);
  // console.log('************************************');

  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  for (const letter of input) {
    if (!lettersInHand.includes(letter)) {
      return false;
    }

    lettersInHand.splice(letter, 1);
  }

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
