const getTheTitles = function (array) {
  const bookTitles = [];

  // return array.map((book) => book.title);

  for (let i = 0; i < array.length; i++) {
    bookTitles.push(array[i].title);
  }

  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
