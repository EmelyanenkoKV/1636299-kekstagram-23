import {userPhotos} from './data.js';
import {pictures} from './preview.js';
import {onCloseModalClick, onPopupEscKeydown} from './close.js';

const PHOTO_WIDTH = 35;
const PHOTO_HEIGHT = 35;
const COMMENTS_LOAD_STEP = 5;
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
    document.body.classList.add('modal-open');
    bigImage.src = url;
    bigLikesCount.textContent = likes;
    bigCommentsCount.textContent = comments.length;
    bigPhotoDescription.textContent = description;
    commentsList.innerHTML = '';

    // Генерация комментариев к фотографии;

    const generateCommentsList = (userComments) => {
      userComments.forEach(({avatar, name, message}) => {
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
      });
      commentsList.appendChild(commentFragment);
    };

    const commentsCounter = 0;
    let currentCommentsNumber = COMMENTS_LOAD_STEP;

    // Отрисовываем первые 5 комментариев

    const initialComments = comments.slice(commentsCounter, currentCommentsNumber);
    socialCommentCount.firstChild.textContent = `${initialComments.length} из  `;
    generateCommentsList(initialComments);

    // Отрисовываем дополнительные комментарии по клику на кнопку

    commentsLoader.addEventListener('click', () => {
      const newCommentsNumber = currentCommentsNumber + COMMENTS_LOAD_STEP;
      const additionalComments = comments.slice(currentCommentsNumber, newCommentsNumber);
      currentCommentsNumber = newCommentsNumber;
      generateCommentsList(additionalComments);

      const renderedCommentsLength = document.querySelectorAll('.social__comment').length;

      if (comments.length === renderedCommentsLength) {
        commentsLoader.classList.add('hidden');
      }
      socialCommentCount.firstChild.textContent = `${renderedCommentsLength} из  `;
    });

    if (comments.length > COMMENTS_LOAD_STEP) {
      socialCommentCount.classList.remove('hidden');
      commentsLoader.classList.remove('hidden');
    } else {
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
    }

    bigPictureCancel.addEventListener('click', onCloseModalClick);
    document.addEventListener('keydown', onPopupEscKeydown);
  };
  bigPictureCancel.removeEventListener('click', onCloseModalClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
  preview.addEventListener('click', onPreviewClick);
};

photos.forEach((photo, i) => {
  addPhotoClickHandler(photo, userPhotos[i]);
});

