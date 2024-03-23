export const getRandomNumber = (min, max = 100) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};
