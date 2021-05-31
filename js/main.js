const GETTING_VALUE = function (minValue, maxValue) {
  if (minValue < 0 || maxValue < 0) {
    return ('Значение меньше чем ноль');
  } else if (minValue > maxValue) {
    return ('Поменяйте числа местами');
  } else if (minValue === maxValue) {
    return ('Введенные числа равны');
  }
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

GETTING_VALUE();

const CHECK_LENGHT = function (string, maxStringLenght) {
  return string.length <= maxStringLenght;
};

CHECK_LENGHT();
