import {onCloseModalClick, onPopupEscKeydown} from './close.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');
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

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const  isMatch = FILE_TYPES.some((it) => fileName.endsWith(it));

  if ( isMatch) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});
