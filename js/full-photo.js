import {pictures} from './preview.js';
import {onCloseModalClick, onPopupEscKeydown} from './close.js';

const PHOTO_WIDTH = 35;
const PHOTO_HEIGHT = 35;
const COMMENTS_LOAD_STEP = 5;
const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const bigLikesCount = bigPicture.querySelector('.likes-count');
const bigCommentsCount = bigPicture.querySelector('.comments-count');
const bigImage = bigPicture.querySelector('img');
const bigPhotoDescription = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentFragment = document.createDocumentFragment();

const addPhotoClickHandler = (preview, {url, likes, comments, description}) => {
  const onPreviewClick = (evt) => {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigImage.src = url;
    bigLikesCount.textContent = likes;
    bigCommentsCount.textContent = comments.length;
    bigPhotoDescription.textContent = description;
    commentsList.innerHTML = '';

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

    const initialComments = comments.slice(commentsCounter, currentCommentsNumber);
    socialCommentCount.firstChild.textContent = `${initialComments.length} ????  `;
    generateCommentsList(initialComments);

    commentsLoader.addEventListener('click', () => {
      const newCommentsNumber = currentCommentsNumber + COMMENTS_LOAD_STEP;
      const additionalComments = comments.slice(currentCommentsNumber, newCommentsNumber);
      currentCommentsNumber = newCommentsNumber;
      generateCommentsList(additionalComments);

      const renderedCommentsLength = document.querySelectorAll('.social__comment').length;

      if (comments.length === renderedCommentsLength) {
        commentsLoader.classList.add('hidden');
      }
      socialCommentCount.firstChild.textContent = `${renderedCommentsLength} ????  `;
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

  preview.addEventListener('click', onPreviewClick);
};


const addBigPhotoComments = (userPhotoList) => {
  const photos = pictures.querySelectorAll('.picture');

  photos.forEach((photo, i) => {
    addPhotoClickHandler(photo, userPhotoList[i]);
  });
};

export {addBigPhotoComments};
