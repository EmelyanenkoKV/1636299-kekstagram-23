//Фильтрация изображений
const imagePreview = document.querySelector('.img-upload__preview');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const sliderWrapper = document.querySelector('.img-upload__effect-level');

const noEffectRadio = document.querySelector('#effect-none');
const chromeEffectRadio = document.querySelector('#effect-chrome');
const sepiaEffectRadio = document.querySelector('#effect-sepia');
const marvinEffectRadio = document.querySelector('#effect-marvin');
const phobosEffectRadio = document.querySelector('#effect-phobos');
const heatEffectRadio = document.querySelector('#effect-heat');

sliderWrapper.classList.add('visually-hidden');

const effects = {
  chrome: {
    NAME: 'grayscale',
    HTML_CLASS: 'effects__preview--chrome',
    UNIT: '',
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
  },
  sepia: {
    NAME: 'sepia',
    HTML_CLASS: 'effects__preview--sepia',
    UNIT: '',
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
  },
  marvin: {
    NAME: 'invert',
    HTML_CLASS: 'effects__preview--marvin',
    UNIT: '%',
    MIN: 0,
    MAX: 100,
    STEP: 1,
    START: 100,
  },
  phobos: {
    NAME: 'blur',
    HTML_CLASS: 'effects__preview--phobos',
    UNIT: 'px',
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    START: 3,
  },
  heat: {
    NAME: 'brightness',
    HTML_CLASS: 'effects__preview--heat',
    UNIT: '',
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    START: 3,
  },
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

const showEffect = (effectClass, effectStyle, effectUnit) => {
  sliderWrapper.classList.remove('visually-hidden');
  imagePreview.classList = 'img-upload__preview';
  imagePreview.classList.add(`${effectClass}`);
  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectValue.value = values[handle];
    imagePreview.style.filter = `${effectStyle}(${effectValue.value}${effectUnit})`;
  });
};

const sliderOptionsHandler = (minValue, maxValue, startValue, stepValue) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue,
    },
    start: startValue,
    step: stepValue,
  });
};

const onEffects = () => {
  if (noEffectRadio.checked) {
    imagePreview.classList = 'img-upload__preview';
    sliderWrapper.classList.add('visually-hidden');
    imagePreview.style.filter = 'none';
  } else if (chromeEffectRadio.checked) {
    showEffect(effects.chrome.HTML_CLASS, effects.chrome.NAME, effects.chrome.UNIT);
    sliderOptionsHandler(effects.chrome.MIN, effects.chrome.MAX, effects.chrome.START, effects.chrome.STEP);
  } else if (sepiaEffectRadio.checked) {
    showEffect(effects.sepia.HTML_CLASS, effects.sepia.NAME, effects.sepia.UNIT);
    sliderOptionsHandler(effects.sepia.MIN, effects.sepia.MAX, effects.sepia.START, effects.sepia.STEP);
  } else if (marvinEffectRadio.checked) {
    showEffect(effects.marvin.HTML_CLASS, effects.marvin.NAME, effects.marvin.UNIT);
    sliderOptionsHandler(effects.marvin.MIN, effects.marvin.MAX, effects.marvin.START, effects.marvin.STEP);
  } else if (phobosEffectRadio.checked) {
    showEffect(effects.phobos.HTML_CLASS, effects.phobos.NAME, effects.phobos.UNIT);
    sliderOptionsHandler(effects.phobos.MIN, effects.phobos.MAX, effects.phobos.START, effects.phobos.STEP);
  } else if (heatEffectRadio.checked) {
    showEffect(effects.heat.HTML_CLASS, effects.heat.NAME, effects.heat.UNIT);
    sliderOptionsHandler(effects.heat.MIN, effects.heat.MAX, effects.heat.START, effects.heat.STEP);
  }
};
noEffectRadio.addEventListener('click', onEffects);
chromeEffectRadio.addEventListener('click', onEffects);
sepiaEffectRadio.addEventListener('click', onEffects);
marvinEffectRadio.addEventListener('click', onEffects);
phobosEffectRadio.addEventListener('click', onEffects);
heatEffectRadio.addEventListener('click', onEffects);

