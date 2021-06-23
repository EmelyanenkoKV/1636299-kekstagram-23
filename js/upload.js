import {onCloseModalClick, onPopupEscKeydown} from './close.js';

const uploadFile = document.querySelector('#upload-file');
const closeUpload = document.querySelector('#upload-cancel');
const photoUpload = document.querySelector('.img-upload__overlay');

const uploadPhotoUser = () => {
  photoUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeUpload.addEventListener('click', onCloseModalClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

uploadFile.addEventListener('change', uploadPhotoUser);
