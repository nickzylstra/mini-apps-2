import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard.jsx';
import RollInput from './components/RollInput.jsx';

const App = () => {
  const [scoreTotal, setScoreTotal] = useState(0);
  const [scoreFrames, setScoreFrames] = useState(new Array(10));
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
