import {isEscEvent} from './utils.js';
import {setImageScale} from './scale-photo.js';

const DEFAULT_SCALE_VALUE = 100;

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const photoUpload = document.querySelector('.img-upload__overlay');
const textDescription = photoUpload.querySelector('.text__description');
const textHashtag = document.querySelector('.text__hashtags');
const uploadFile = document.querySelector('#upload-file');
const commentInput = bigPicture.querySelector('.social__footer-text');
const noEffectRadio = document.querySelector('#effect-none');
const imagePreview = document.querySelector('.img-upload__preview');
const sliderWrapper = document.querySelector('.img-upload__effect-level');

const onCloseModalClick = () => {
  photoUpload.classList.add('hidden');
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
  uploadFile.value = '';
  textDescription.value = '';
  textHashtag.value = '';

  setImageScale(DEFAULT_SCALE_VALUE);
  imagePreview.classList = 'img-upload__preview';
  sliderWrapper.classList.add('visually-hidden');
  imagePreview.style.filter = 'none';
  noEffectRadio.checked = 'true';
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    if (textHashtag === document.activeElement || textDescription === document.activeElement) {
      evt.stopPropagation();
    } else {
      onCloseModalClick();
    }
  }
};

const closeMessageModal = (messageTemplate, messageCloseButton, messageInner) => {
  messageCloseButton.addEventListener('click', () => {
    messageTemplate.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      messageTemplate.remove();
    }
  });
  messageTemplate.addEventListener('click', (evt) => {
    const isClickInside = messageInner.contains(evt.target);

    if (!isClickInside) {
      messageTemplate.remove();
    }
  });
};

export {onCloseModalClick, onPopupEscKeydown, closeMessageModal};

