const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_STEP = 25;

const buttonMinus = document.querySelector('.scale__control--smaller');
const buttonPlus = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview');
const scaleValue = document.querySelector('.scale__control--value');

let currentScale = SCALE_MAX_VALUE ;
scaleValue.value = `${currentScale}%`;

const setImageScale = (newScale) => {
  scaleValue.value = `${newScale}%`;
  imagePreview.style = `transform: scale(${newScale / 100})`;
  currentScale = newScale;
};

const buttonMinusClickHandler = () => {
  if (currentScale > SCALE_MIN_VALUE) {
    currentScale -= SCALE_STEP;
    setImageScale(currentScale);
  }
};

const buttonPlusClickHandler = () => {
  if (currentScale < SCALE_MAX_VALUE) {
    currentScale += SCALE_STEP;
    setImageScale(currentScale);
  }
};

buttonMinus.addEventListener('click', buttonMinusClickHandler);
buttonPlus.addEventListener('click', buttonPlusClickHandler);

