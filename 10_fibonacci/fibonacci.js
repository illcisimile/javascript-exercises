const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }

  let a = 0;
  let b = 1;
  let c;

  const fibo = [];

  for (let i = 1; i <= num; i++) {
    fibo.push(b);
    c = a + b;
    a = b;
    b = c;
  }

  return fibo[fibo.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
