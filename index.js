function sumItems(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sumItems(array.slice(1));
  }
}
module.exports = sumItems;