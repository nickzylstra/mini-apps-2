import { Machine } from 'xstate';


const rollMachine = Machine(
  {
    id: 'roll',
    initial: 'gameStart',
    states: {
      gameStart: {
        on: {
          START: 'firstHistNo',
        },
      },
      firstHistNo: {
        on: {
          ROLL: [
            {
              target: 'secondHistX',
              cond: 'isStrike',
            },
            { target: 'secondHistNo' },
          ],
        },
      },
      firstHist1X: {},
      firstHist2X: {},
      firstHistSP: {},
      secondHistNo: {},
      secondHistX: {},
    },
  },
  {
    guards: {
      isStrike: (context, event) => event.pinCount === 10,
    },
  },
);

export default rollMachine;
