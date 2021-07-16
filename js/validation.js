import {checkStringLength} from './utils.js';

const MAX_HASHTAGS = 5;
const REG_HASHTAG = /^#[A-za-zА-Яа-я0-9]{1,19}$/;
const INVALID_INPUT_STYLE = 'red';
const VALID_INPUT_STYLE = 'green';
const TEXT_VALIDATE = `Хэш-тег должен начинаться с символа # и состоять из букв и чисел.
Максимальная длина одного хэш-тега 20 символов, включая символ #.
Хэш-теги должны разделяться пробелами`;
const ERROR_NO_REPEAT = 'Хэштеги не должны повторяться';
const MAX_COMMENTS_SYMBOL = 140;
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const onFormHashtagCheck = (evt) => {
  if (textHashtags.value !== '') {
    const hashtags = textHashtags.value.toLowerCase().trim().split(' ').filter((hashtag) => hashtag);
    const hashtagsSet = new Set(hashtags);
    hashtags.forEach((hashtag) => {
      if (!REG_HASHTAG.test(hashtag)) {
        textHashtags.setCustomValidity(TEXT_VALIDATE);
        textHashtags.style.outlineColor = INVALID_INPUT_STYLE;
        evt.preventDefault();
      } else if (hashtags.length !== hashtagsSet.size) {
        textHashtags.setCustomValidity(ERROR_NO_REPEAT);
        textHashtags.style.outlineColor = INVALID_INPUT_STYLE;
        evt.preventDefault();
      } else {
        textHashtags.setCustomValidity('');
        textHashtags.style.outlineColor = VALID_INPUT_STYLE;
      }
      textHashtags.reportValidity();
    });
    if (hashtags.length > MAX_HASHTAGS) {
      textHashtags.setCustomValidity(`Количество хэштегов должно быть не более ${MAX_HASHTAGS}`);
    }
  } else {
    textHashtags.setCustomValidity('');
    textHashtags.style.outlineColor = VALID_INPUT_STYLE;
  }
};
textHashtags.addEventListener('input', onFormHashtagCheck);

const onFormDescriptionCheck = (evt) => {
  const textDescriptionLength = checkStringLength(textDescription.value, MAX_COMMENTS_SYMBOL);
  if (!textDescriptionLength) {
    textDescription.setCustomValidity(`Удалите лишние ${textDescription.value.length - MAX_COMMENTS_SYMBOL} симв.`);
    textDescription.style.outlineColor = INVALID_INPUT_STYLE;
    evt.preventDefault();
  } else {
    textDescription.setCustomValidity('');
    textDescription.style.outlineColor = VALID_INPUT_STYLE;
  }
  textDescription.reportValidity();
};
textDescription.addEventListener('input', onFormDescriptionCheck);
