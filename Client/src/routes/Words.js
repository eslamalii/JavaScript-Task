import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/UI/Alert';
import { Button } from '../components/UI/Button';
import Card from '../components/UI/Card';
import ProgressBar from '../components/UI/ProgressBar';
const axios = require('axios').default;

const Words = () => {
  const navigate = useNavigate();

  const pos = ['Adverb', 'Verb', 'Noun', 'Adjective'];

  const [questions, setQuestions] = useState([]);
  const [questionsNum, setQuestionsNum] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isRight, setIsRight] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  // using a little delay to appear an alert whether it's wrong or right answer before moving on to the next question
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // only to get the random words from the server
  useEffect(() => {
    const url = 'http://localhost:3000/words';
    axios
      .get(url)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // check every time (questionsNum) if it's the questions already has ended or not and to set (isFinish)
  useEffect(() => {
    if (questionsNum > questions.length - 1) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
    setIsRight(null);
    setIsDisabled(false);
  }, [questionsNum, questions]);

  // handle buttons and to move on to the next question also to check if the answer is right or wrong
  const handleAnswers = async (e) => {
    const answer = e.target.textContent.toLowerCase();
    if (questions[questionsNum].pos === answer) {
      setScore(score + 1);
      setIsRight(true);
    } else {
      setIsRight(false);
    }
    setIsDisabled(true);
    await delay(1500);
    setQuestionsNum(questionsNum + 1);
  };

  return isFinished ? (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-2/4 h-1/2 gap-4 flex-col">
        <Button onClick={() => navigate('/rank', { state: { score } })}>
          Click for the Result
        </Button>
      </Card>
    </div>
  ) : (
    <div className=" h-screen flex flex-col items-center justify-center gap-4">
      <ProgressBar value={(questionsNum / questions.length) * 100} />

      <Card className=" w-2/4 h-fit flex-col">
        <h2 className="text-2xl font-bold text-gray-800 m-6">
          {questions[questionsNum] ? questions[questionsNum].word : ''}
        </h2>
        {isRight !== null ? <Alert isRight={isRight} /> : ''}
      </Card>

      <Card className=" w-fit h-24 gap-4">
        {React.Children.toArray(
          pos.map((element) => {
            return (
              <Button disabled={isDisabled} onClick={handleAnswers}>
                {element}
              </Button>
            );
          })
        )}
      </Card>
    </div>
  );
};

export default Words;
