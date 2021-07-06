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

const effects = {
  chrome: {
    name: 'grayscale',
    htmlClass: 'effects__preview--chrome',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
  },
  sepia: {
    name: 'sepia',
    htmlClass: 'effects__preview--sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
  },
  marvin: {
    name: 'invert',
    htmlClass: 'effects__preview--marvin',
    unit: '%',
    min: 0,
    max: 100,
    step: 1,
    start: 100,
  },
  phobos: {
    name: 'blur',
    htmlClass: 'effects__preview--phobos',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1,
    start: 3,
  },
  heat: {
    name: 'brightness',
    htmlClass: 'effects__preview--heat',
    unit: '',
    min: 1,
    max: 3,
    step: 1,
    start: 3,
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
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
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

const effectsHandler = () => {
  if (noEffectRadio.checked) {
    imagePreview.classList = 'img-upload__preview';
    sliderWrapper.classList.add('visually-hidden');
    imagePreview.style.filter = 'none';
  } else if (chromeEffectRadio.checked) {
    showEffect(effects.chrome.htmlClass, effects.chrome.name, effects.chrome.unit);
    sliderOptionsHandler(effects.chrome.min, effects.chrome.max, effects.chrome.start, effects.chrome.step);
  } else if (sepiaEffectRadio.checked) {
    showEffect(effects.sepia.htmlClass, effects.sepia.name, effects.sepia.unit);
    sliderOptionsHandler(effects.sepia.min, effects.sepia.max, effects.sepia.start, effects.sepia.step);
  } else if (marvinEffectRadio.checked) {
    showEffect(effects.marvin.htmlClass, effects.marvin.name, effects.marvin.unit);
    sliderOptionsHandler(effects.marvin.min, effects.marvin.max, effects.marvin.start, effects.marvin.step);
  } else if (phobosEffectRadio.checked) {
    showEffect(effects.phobos.htmlClass, effects.phobos.name, effects.phobos.unit);
    sliderOptionsHandler(effects.phobos.min, effects.phobos.max, effects.phobos.start, effects.phobos.step);
  } else if (heatEffectRadio.checked) {
    showEffect(effects.heat.htmlClass, effects.heat.name, effects.heat.unit);
    sliderOptionsHandler(effects.heat.min, effects.heat.max, effects.heat.start, effects.heat.step);
  }
};
noEffectRadio.addEventListener('click', effectsHandler);
chromeEffectRadio.addEventListener('click', effectsHandler);
sepiaEffectRadio.addEventListener('click', effectsHandler);
marvinEffectRadio.addEventListener('click', effectsHandler);
phobosEffectRadio.addEventListener('click', effectsHandler);
heatEffectRadio.addEventListener('click', effectsHandler);
