export const transformReviewsTime = timeString => {
  const splitDate = timeString.split('T');
  const splitTime = splitDate[1].split('.');

  const date = splitDate[0];
  const time = splitTime[0];

  return `${date} 
  ${time}`;
};
