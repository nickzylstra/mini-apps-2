import React from 'react';
import useMachine from './xstate/useMachine.js';
import gameMachine from './xstate/gameMachine.js';
import Scoreboard from './components/Scoreboard.jsx';
import RollInput from './components/RollInput.jsx';


const App = () => {
  const [machine, send] = useMachine(gameMachine);
  const { frames, currentFrame, score } = machine.context;

  const addRoll = (pinCount) => send({ type: 'ROLL', pinCount });

  return (
    <div id="app">
      <Scoreboard
        score={score}
        frames={frames}
        currentFrame={currentFrame}
      />
      <RollInput
        addRoll={addRoll}
      />
    </div>
  );
};

export default App;
