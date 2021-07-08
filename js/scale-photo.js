const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_STEP = 25;

const buttonMinus = document.querySelector('.scale__control--smaller');
const buttonPlus = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview');
const scaleValue = document.querySelector('.scale__control--value');

let currentScale = SCALE_MAX_VALUE;
scaleValue.value = `${currentScale}%`;

const setImageScale = (newScale) => {
  scaleValue.value = `${newScale}%`;
  imagePreview.style = `transform: scale(${newScale / SCALE_MAX_VALUE})`;
  currentScale = newScale;
};

const onButtonMinusClick = () => {
  if (currentScale > SCALE_MIN_VALUE) {
    currentScale -= SCALE_STEP;
    setImageScale(currentScale);
  }
};

const onButtonPlusClick = () => {
  if (currentScale < SCALE_MAX_VALUE) {
    currentScale += SCALE_STEP;
    setImageScale(currentScale);
  }
};

buttonMinus.addEventListener('click', onButtonMinusClick);
buttonPlus.addEventListener('click', onButtonPlusClick);

export {setImageScale};
