import {renderSimilarPhoto} from './preview.js';
import {addBigPhotoComments} from './full-photo.js';
import {onFormSuccessSend} from './modal-messages.js';
import {onFormErrorSend} from './modal-messages.js';
import {showAlert} from './utils.js';
import {renderPhotoFilter} from './filter.js';

const imgUploadForm = document.querySelector('.img-upload__form');

const getUserPhotos = () => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((userPhotos) => {
      renderSimilarPhoto(userPhotos);
      addBigPhotoComments(userPhotos);
      renderPhotoFilter(userPhotos);
    })
    .catch(() => showAlert ('Ошибка при загрузке фото. Попробуйте ещё раз'));
};
getUserPhotos();

const setUserFormSubmit = (onSuccess, onError) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    fetch(
      'https://23.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: new FormData(evt.target),
      })
      .then(() => onSuccess())
      .catch(() => onError());
  });
};

setUserFormSubmit(onFormSuccessSend, onFormErrorSend);
