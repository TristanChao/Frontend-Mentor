import { useState } from 'react';
import './App.css';
import { Game } from './Components/Game';
import { Header } from './Components/Header';
import { Results } from './Components/Results';
import { Rules } from './Components/Rules';

function App() {
  const [userChoice, setUserChoice] = useState<string>('rock');
  const [houseChoice, setHouseChoice] = useState<string>();

  return (
    <>
      <Header />
      {userChoice ? <Results /> : <Game />}
      <Rules />
    </>
  );
}

export default App;
