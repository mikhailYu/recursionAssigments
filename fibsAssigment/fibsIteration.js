let result = [0, 1];

fibs(8);
function fibs(n) {
  n -= 2;
  for (; n > 0; n--) {
    let a = result[result.length - 1];
    let b = result[result.length - 2];
    result.push(a + b);
  }
}

console.log(result);
