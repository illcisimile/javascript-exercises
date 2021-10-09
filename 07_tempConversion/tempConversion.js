const ftoc = function (fNum) {
  let result = (fNum - 32) / 1.8;
  let resultRounded = Math.round(result * 10) / 10;
  return resultRounded;
};

const ctof = function (cNum) {
  let result = cNum * 1.8 + 32;
  let resultRounded = Math.round(result * 10) / 10;
  return resultRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
