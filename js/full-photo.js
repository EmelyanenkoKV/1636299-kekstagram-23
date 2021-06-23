import {userPhotos} from './data.js';
import {pictures} from './preview.js';
import {onCloseModalClick,onPopupEscKeydown} from './close.js';

const PHOTO_WIDTH = 35;
const PHOTO_HEIGHT = 35;
const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const photos = pictures.querySelectorAll('.picture');
const bigLikesCount = bigPicture.querySelector('.likes-count');
const bigCommentsCount = bigPicture.querySelector('.comments-count');
const bigImage = bigPicture.querySelector('img');
const bigPhotoDescription = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentFragment = document.createDocumentFragment();

// Обработка события нажатия на миниатюру и заполнение данными;
const addPhotoClickHandler = (preview, {url, likes, comments, description}) => {
  const onPreviewClick = () => {
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.body.classList.add('modal-open');
    bigImage.src = url;
    bigLikesCount.textContent = likes;
    bigCommentsCount.textContent = comments.length;
    bigPhotoDescription.textContent = description;

    // Генерация комментариев к фотографии;
    comments.forEach(({avatar, name, message}) => {
      const comment = document.createElement('li');
      const commentImg = document.createElement('img');
      const commentText = document.createElement('p');

      comment.classList.add('social__comment');
      commentImg.classList.add('social__picture');
      commentText.classList.add('social__text');
      commentImg.src = avatar;
      commentImg.alt = name;
      commentImg.width = PHOTO_WIDTH;
      commentImg.height = PHOTO_HEIGHT;
      commentText.textContent = message;
      comment.appendChild(commentImg);
      comment.appendChild(commentText);
      commentFragment.appendChild(comment);
      commentsList.innerHTML = '';

      bigPictureCancel.addEventListener('click', onCloseModalClick);
      document.addEventListener('keydown', onPopupEscKeydown);
    });
    commentsList.appendChild(commentFragment);
  };
  bigPictureCancel.removeEventListener('click', onCloseModalClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
  preview.addEventListener('click', onPreviewClick);
};

photos.forEach((photo, i) => {
  addPhotoClickHandler(photo, userPhotos[i]);
});

