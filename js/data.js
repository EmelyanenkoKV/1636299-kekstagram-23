import {getRandomNumber,getRandomArrayElement} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Кристина',
  'Толик',
  'Юля',
  'Сережа',
  'Света',
  'Валера',
];

const DESCRIPTIONS = [
  'Приятно провожу вечер',
  'Скорее бы выходные!',
  'Много работы, но я не унываю',
  'Хорошее настроение',
  'Отдыхаю с друзьями',
  'Когда лето?',
];

const MIN_LIKE_NUMBER = 15;
const MAX_LIKE_NUMBER = 200;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_COMMENT_COUNT = 1;
const MAX_COMMENT_COUNT = 3;
const USERS_POSTS_COUNT = 25;

const createUserComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createUserPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(MIN_LIKE_NUMBER, MAX_LIKE_NUMBER),
  comments: new Array(getRandomNumber(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT)).fill(null).map((item, i) => createUserComment(i + 1)),
});

const userPhotos = new Array(USERS_POSTS_COUNT).fill(null).map((item, index) => createUserPost(index + 1));

export {userPhotos};
