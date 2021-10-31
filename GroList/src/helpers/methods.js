import {Alert} from 'react-native';

export const getAge = d => {
  var ageDate = new Date(Date.now() - d);
  if (d === null) {
    return 0;
  } else {
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
};

export const formatDate = date => {
  let year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
  let month = new Intl.DateTimeFormat('en', {month: 'long'}).format(date);
  let day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);
  return `${month} ${day}, ${year}`;
};

export const uniqueIdsFromArray = array => {
  const uniqueArray = array.filter(
    (item, index) => array.findIndex(obj => obj === item) === index,
  );
  return uniqueArray;
};

export const countUniqueValuesFromArray = array => {
  const counts = {};
  array.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
};

export const comingSoonAlert = () =>
  Alert.alert(
    'Coming Soon!',
    'This feature will be available soon! no worries :)',
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
  );
