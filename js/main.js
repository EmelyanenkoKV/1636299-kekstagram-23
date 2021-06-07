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

const USERS_POSTS_COUNT = 25;

function getRandomNumber(min, max) {
  const isBothNumbers = typeof min === 'number' && typeof max === 'number';
  if (!isBothNumbers) {
    return 'Введенные значения должны быть числами';
  }
  if ((min < 0 || max < 0) || min >= max) {
    return 'Некорректный диапазон';
  }
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

getRandomNumber(1,9);

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;}
checkStringLength('false',9);

const createUserComment = () => {
  const randomIdComment = getRandomNumber(1, 200);
  const randomAvatar = getRandomNumber(1, 6);
  const randomMessage = getRandomNumber(0, MESSAGES.length - 1);
  const randomName = getRandomNumber(0, NAMES.length - 1);
  return {
    id: randomIdComment,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: MESSAGES[randomMessage],
    name: NAMES[randomName],
  };
};

createUserComment();

const createUserPost = () => {
  const randomId = getRandomNumber(1, 25);
  const randomIndexFoto = getRandomNumber(1, 25);
  const randomDescription = getRandomNumber(0, DESCRIPTIONS.length - 1);
  const randomLike = getRandomNumber(15, 200);
  return {
    id: randomId,
    url: `photos/${randomIndexFoto}.jpg`,
    description: DESCRIPTIONS[randomDescription],
    likes: randomLike,
    comments: createUserComment(),
  };
};

new Array(USERS_POSTS_COUNT).fill(null).map(() => createUserPost());


