import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard.jsx';
import RollInput from './components/RollInput.jsx';


const App = () => {
  const [scoreFrames, setScoreFrames] = useState((new Array(10)).fill([null, null, null]));
  const scoreTotal = scoreFrames.reduce((total, sF) => total + sF[2], 0);
  const [frame, setFrame] = useState(1);

  const addRoll = (pinCount) => {
    const nextScoreFrames = scoreFrames.slice();
    const scoreFramesIdx = frame - 1;
    if (!scoreFrames[scoreFramesIdx][0]) {
      nextScoreFrames[scoreFramesIdx][0] = pinCount;
      nextScoreFrames[scoreFramesIdx][2] += pinCount;
      setScoreFrames(nextScoreFrames);
    } else {
      nextScoreFrames[scoreFramesIdx][1] = pinCount;
      nextScoreFrames[scoreFramesIdx][2] += pinCount;
      setScoreFrames(nextScoreFrames);
      setFrame(frame + 1);
    }
  };

  return (
    <div id="app">
      <Scoreboard
        scoreTotal={scoreTotal}
        scoreFrames={scoreFrames}
      />
      <RollInput
        addRoll={addRoll}
      />
    </div>
  );
};

export default App;
