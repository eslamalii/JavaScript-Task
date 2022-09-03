const data = require('../TestData.json');

const getWords = (req, res) => {
  const pos = ['verb', 'noun', 'adjective', 'adverb'];
  const wordsList = [];

  // Get at least 1 adjective, 1 adverb, and 1 noun, and 1 verb nad push it to an array (wordsList)
  pos.forEach((pos) => {
    const posArray = data.wordList.filter((word) => word.pos === pos);
    wordsList.push(posArray[Math.floor(Math.random() * posArray.length)]);
  });

  // Push unique random words to the list (wordsList)
  while (wordsList.length < 10) {
    const currentObj =
      data.wordList[Math.floor(Math.random() * data.wordList.length)];

    if (!wordsList.some((obj) => obj.id == currentObj.id)) {
      wordsList.push(currentObj);
    }
  }

  res.send(wordsList);
};

module.exports = { getWords };
