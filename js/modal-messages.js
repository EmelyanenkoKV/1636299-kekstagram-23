import {onCloseModalClick, closeSuccessMessageModal, closeErrorMessageModal} from './close.js';

const errorUploadImage = document.querySelector('#error').content.querySelector('section');
const successUploadImage = document.querySelector('#success').content.querySelector('section');
const errorFragment = document.createDocumentFragment();
const successFragment = document.createDocumentFragment();
const successUploadImageTemplate = successUploadImage.cloneNode(true);
const errorUploadImageTemplate = errorUploadImage.cloneNode(true);

const onFormErrorSend = () => {

  onCloseModalClick();
  errorFragment.appendChild(errorUploadImageTemplate);
  document.body.appendChild(errorFragment);

  closeErrorMessageModal();
};

const onFormSuccessSend = () => {

  onCloseModalClick();
  successFragment.appendChild(successUploadImageTemplate);
  document.body.appendChild(successFragment);

  closeSuccessMessageModal();
};

export {onFormSuccessSend, onFormErrorSend};
