import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard.jsx';
import RollInput from './components/RollInput.jsx';

const testScoreFrames = new Array(10);
testScoreFrames[0] = [4, 3, 7];
testScoreFrames[1] = [4, 6, 20];
testScoreFrames[2] = [10, 0, 16];
testScoreFrames[3] = [3, 3, 6];

const App = () => {
  const [scoreTotal, setScoreTotal] = useState(0);
  const [scoreFrames, setScoreFrames] = useState(testScoreFrames);
  // const [scoreFrames, setScoreFrames] = useState(new Array(10));
  const [frame, setFrame] = useState(1);

  return (
    <div>
      <Scoreboard
        scoreTotal={scoreTotal}
        scoreFrames={scoreFrames}
      />
      <RollInput
        scoreTotal={scoreTotal}
        setScoreTotal={setScoreTotal}
        scoreFrames={scoreFrames}
        setScoreFrames={setScoreFrames}
        frame={frame}
        setFrame={setFrame}
      />
    </div>
  );
};

export default App;
