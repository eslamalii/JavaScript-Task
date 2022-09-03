const { scoresList } = require('../TestData.json');

const getRank = (req, res) => {
  try {
    // Get the score from the body or the front
    const score = (req.body.score / 10) * 100;

    // Get the scores that are greater than that score to calculate the percentage
    const scores = scoresList.filter((scoreCheck) => {
      return scoreCheck < score;
    });

    // Calculate the percentage of the scores
    const rank = Math.round((scores.length / scoresList.length) * 100);

    return res.json({ rank: rank });
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = { getRank };
