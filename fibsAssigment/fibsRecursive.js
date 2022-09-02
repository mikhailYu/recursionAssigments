let result = [0, 1];

fibs(8);
function fibs(n) {
  if (n <= 2) {
    return;
  }

  let a = result[result.length - 1];
  let b = result[result.length - 2];
  num = a + b;
  result.push(num);
  n--;
  fibs(n);
}

console.log(result);
