import {isEscEvent} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const photoUpload = document.querySelector('.img-upload__overlay');
const textDescription = photoUpload.querySelector('.text__description');
const textHashtag = document.querySelector('.text__hashtags');
const uploadFile = document.querySelector('#upload-file');
const commentInput = bigPicture.querySelector('.social__footer-text');

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

export {onCloseModalClick, onPopupEscKeydown};

