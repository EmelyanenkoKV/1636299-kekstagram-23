import {userPhotos} from './data.js';
import {pictures} from './preview.js';
import {isEscEvent} from './utils.js';

const picture = pictures.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigLikesCount = bigPicture.querySelector('.likes-count');
const bigCommentsCount = bigPicture.querySelector('.comments-count');
const bigImage = bigPicture.querySelector('img');
const bigPhotoDescription = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentFragment = document.createDocumentFragment();
const PHOTO_WIDTH = 35;
const PHOTO_HEIGHT = 35;

// Обработка события нажатия на миниатюру и заполнение данными;
const addPhotoClickHandlers = (preview, {url, likes, comments, description}) => {
  preview.addEventListener('click', () => {
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
    });
    commentsList.appendChild(commentFragment);
  });
};

picture.forEach((photo, i) => {
  addPhotoClickHandlers(photo, userPhotos[i]);
});

// Обработчик события при нажатии клавиши Esc;
document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    bigPicture.classList.add('hidden');
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    document.body.classList.remove('modal-open');
  }
});

// Закрытие окна при клике на кнопку "Close";
bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
});
