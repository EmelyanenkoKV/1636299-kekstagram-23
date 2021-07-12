import {onCloseModalClick, closeMessageModal} from './close.js';

const errorUploadImage = document.querySelector('#error').content.querySelector('section');
const successUploadImage = document.querySelector('#success').content.querySelector('section');
const errorFragment = document.createDocumentFragment();
const successFragment = document.createDocumentFragment();

const onFormErrorSend = () => {

  onCloseModalClick();

  const showErrorMessage = () => {
    const errorUploadImageTemplate = errorUploadImage.cloneNode(true);
    const errorButtonTemplate = errorUploadImageTemplate.querySelector('.error__button');
    const errorInnerTemplate = errorUploadImageTemplate.querySelector('.error__inner');
    errorFragment.appendChild(errorUploadImageTemplate);
    document.body.appendChild(errorFragment);

    closeMessageModal(errorUploadImageTemplate, errorButtonTemplate, errorInnerTemplate);
  };

  showErrorMessage();
};

const onFormSuccessSend = () => {

  onCloseModalClick();

  const showSuccessMessage = () => {
    const successUploadImageTemplate = successUploadImage.cloneNode(true);
    const successButtonTemplate = successUploadImageTemplate.querySelector('.success__button');
    const successInnerTemplate = successUploadImageTemplate.querySelector('.success__inner');
    successFragment.appendChild(successUploadImageTemplate);
    document.body.appendChild(successFragment);

    closeMessageModal(successUploadImageTemplate, successButtonTemplate, successInnerTemplate);
  };

  showSuccessMessage();
};

export {onFormSuccessSend, onFormErrorSend};
