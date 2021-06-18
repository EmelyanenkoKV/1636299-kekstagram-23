import {userPhotos} from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('a');
const similarPicturesFragment = document.createDocumentFragment();

userPhotos.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  similarPicturesFragment.appendChild(pictureElement);
});
pictures.appendChild(similarPicturesFragment);
