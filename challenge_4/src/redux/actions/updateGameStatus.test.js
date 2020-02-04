import { UPDATED_GAME_STATUS, updateGameStatus } from './updateGameStatus';

describe('updateGameStatus', () => {
  it('should return action type', () => {
    const nextStatus = 'test';
    const action = updateGameStatus(nextStatus);
    const { type, status } = action;
    expect(type).toEqual(UPDATED_GAME_STATUS);
    expect(status).toEqual(status);
  });
});
