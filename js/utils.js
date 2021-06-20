const MAX_LENGTH = 300;
const getRandomNumber = (min, max) => {
  const isBothNumbers = typeof min === 'number' && typeof max === 'number';
  if (!isBothNumbers) {
    return 'Введенные значения должны быть числами';
  }
  if ((min < 0 || max < 0) || min >= max) {
    return 'Некорректный диапазон';
  }
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
};
const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('false', MAX_LENGTH);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getRandomNumber,checkStringLength,getRandomArrayElement,isEscEvent};
