import { Machine } from 'xstate';
import states from './gameMachine/states.js';
import actions from './gameMachine/actions.js';
import guards from './gameMachine/guards.js';

// visualization: https://xstate.js.org/viz/?gist=d0dfe041710c7a91edd8488769a92152

const gameMachine = Machine(
  {
    id: 'game',
    initial: 'frameFirstRollHistNo',
    context: {
      score: 0,
      frames: (new Array(10)).fill({ score: null, roll1: null, roll2: null }),
      currentFrame: 1,
      currentScoringFrame: 1,
    },
    states,
  },
  {
    actions,
    guards,
  },
);

export default gameMachine;
