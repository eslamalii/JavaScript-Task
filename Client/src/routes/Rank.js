import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import Card from '../components/UI/Card';

const Rank = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [rank, setRank] = useState(0);

  useEffect(() => {
    const url = 'http://localhost:3000/rank';
    axios
      .post(url, { score: state.score })
      .then((response) => {
        setRank(response.data.rank);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state.score]);

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-2/4 h-1/2 gap-4 flex-col">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 m-6">
          Your Rank is : {`${rank}%`}
        </h2>

        <Button onClick={() => navigate('/words')}>Try Again</Button>
      </Card>
    </div>
  );
};

export default Rank;
