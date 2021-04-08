export default function filter(arr, checkFunc) {
  let filteredArr = [];

  arr.map(item => {
    if (checkFunc(item)) {
      filteredArr.push(item);
    }
  });

  return filteredArr;
};
