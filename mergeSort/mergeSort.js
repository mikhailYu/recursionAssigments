function mergeSort(inputArr) {
  if (inputArr.length < 2) {
    return inputArr;
  }
  let result = [];
  let arrHalf = Math.round(inputArr.length / 2);
  let leftArr = inputArr.splice(0, arrHalf);
  let rightArr = inputArr;
  return merge(mergeSort(leftArr), mergeSort(rightArr));

  function merge(left, right) {
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
    }

    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }
}

console.log(mergeSort([3, 2, 8, 5, 9, 10, 1, 7]));
