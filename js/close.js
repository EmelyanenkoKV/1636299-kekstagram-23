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
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const closeUpload = document.querySelector('#upload-cancel');

const removeBigPicture = () => {
  closeUpload.removeEventListener('click', onCloseModalClick);
  bigPictureCancel.removeEventListener('click', onCloseModalClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

function onCloseModalClick() {
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

  removeBigPicture();
}

function onPopupEscKeydown(evt) {
  if (isEscEvent(evt)) {
    if (textHashtag === document.activeElement || textDescription === document.activeElement) {
      evt.stopPropagation();
    } else {
      onCloseModalClick();
    }
  }
}

const removeListenerSuccessMessage = () => {
  const successModal = document.querySelector('.success');
  const successModalButton = document.querySelector('.success__button');

  successModalButton.removeEventListener('click', onButtonModalSuccessClick);
  document.removeEventListener('keydown', onKeyToSuccessModalClick);
  successModal.removeEventListener('click', onModalSuccessOutsideClick);
};

function onButtonModalSuccessClick() {
  const successModal = document.querySelector('.success');
  removeListenerSuccessMessage();
  successModal.remove();
}

function onKeyToSuccessModalClick(evt) {
  if (isEscEvent(evt)) {
    const successModal = document.querySelector('.success');
    removeListenerSuccessMessage();
    successModal.remove();
  }
}

function onModalSuccessOutsideClick(evt) {
  const successInnerTemplate = evt.currentTarget.querySelector('.success__inner');
  const isClickInside = successInnerTemplate.contains(evt.target);

  if (!isClickInside) {
    removeListenerSuccessMessage();
    evt.currentTarget.remove();
  }
}

const closeSuccessMessageModal = () => {
  const successModal = document.querySelector('.success');
  const successModalButton = document.querySelector('.success__button');

  successModalButton.addEventListener('click', onButtonModalSuccessClick);
  document.addEventListener('keydown', onKeyToSuccessModalClick);
  successModal.addEventListener('click', onModalSuccessOutsideClick);
};

const removeListenerErrorMessage = () => {
  const errorModal = document.querySelector('.error');
  const errorModalButton = document.querySelector('.error__button');

  errorModalButton.removeEventListener('click', onButtonModalErrorClick);
  document.removeEventListener('keydown', onKeyToErrorModalClick);
  errorModal.removeEventListener('click', onModalErrorOutsideClick);
};

function onButtonModalErrorClick() {
  const errorModal = document.querySelector('.error');
  removeListenerErrorMessage();
  errorModal.remove();
}

function onKeyToErrorModalClick(evt) {
  if (isEscEvent(evt)) {
    const errorModal = document.querySelector('.error');
    removeListenerErrorMessage();
    errorModal.remove();
  }
}

function onModalErrorOutsideClick(evt) {
  const errorInnerTemplate = evt.currentTarget.querySelector('.error__inner');
  const isClickInside = errorInnerTemplate.contains(evt.target);

  if (!isClickInside) {
    removeListenerErrorMessage();
    evt.currentTarget.remove();
  }
}

const closeErrorMessageModal = () => {
  const errorModal = document.querySelector('.error');
  const errorModalButton = document.querySelector('.error__button');

  errorModalButton.addEventListener('click', onButtonModalErrorClick);
  document.addEventListener('keydown', onKeyToErrorModalClick);
  errorModal.addEventListener('click', onModalErrorOutsideClick);
};

export {onCloseModalClick, onPopupEscKeydown, closeSuccessMessageModal, closeErrorMessageModal};

