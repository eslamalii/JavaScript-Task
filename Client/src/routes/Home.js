import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import Card from '../components/UI/Card';

// Welcome page for the first time
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className=" w-2/4 h-1/4 gap-4 flex-col">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 m-6">
          Let's get started the test
        </h2>

        <Button onClick={() => navigate('/words')}>Start</Button>
      </Card>
    </div>
  );
};

export default Home;
