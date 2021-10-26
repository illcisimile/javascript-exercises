const palindromes = function (string) {
  let re = /[\W_]/g;
  let lowercaseStr = string.toLowerCase().replace(re, "");
  let reverseStr = lowercaseStr.split("").reverse().join("");

  return lowercaseStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
