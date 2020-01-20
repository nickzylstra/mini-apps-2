import { useState, useMemo, useEffect } from 'react';
import { interpret } from 'xstate';

export default function useMachine(machine) {
  // Keep track of the current machine state
  const [current, setCurrent] = useState(machine.initialState);

  // Start the service (only once!)
  const service = useMemo(
    () => interpret(machine)
      .onTransition((state) => {
        // Update the current machine state when a transition occurs
        if (state.changed) {
          setCurrent(state);
        }
      })
      .start(),
    [machine],
  );

  // Stop the service when the component unmounts
  useEffect(() => () => service.stop(), [service]);

  return [current, service.send];
}
