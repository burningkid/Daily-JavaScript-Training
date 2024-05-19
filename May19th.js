function findAverage(array) {
  let sum = 0;
  if (array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum / array.length;
  }
  return 0;
}
