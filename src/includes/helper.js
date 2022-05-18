export const shuffleArray = (array) => {
  let idx = array.length;
  let randIdx;
  while (idx != 0) {
    randIdx = Math.floor(Math.random() * idx);
    idx--;
    [array[idx], array[randIdx]] = [array[randIdx], array[idx]];
  }
  return array;
};

export const getRandomChar = (isNumber = false) => {
  let char = isNumber
    ? "0123456789"
    : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return char[Math.floor(Math.random() * char.length)];
};
