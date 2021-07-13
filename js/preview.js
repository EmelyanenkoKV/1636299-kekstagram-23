const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('a');
const similarPicturesFragment = document.createDocumentFragment();
const imgFilters = document.querySelector('.img-filters');

const renderSimilarPhoto = (userPhotos) => {
  userPhotos.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    similarPicturesFragment.appendChild(pictureElement);
  });
  pictures.appendChild(similarPicturesFragment);
  imgFilters.classList.remove('img-filters--inactive');
};

export {renderSimilarPhoto, pictures};
