export const UPDATED_GAME_STATUS = 'UPDATED_GAME_STATUS';

export const updateGameStatus = (status) => ({
  type: UPDATED_GAME_STATUS,
  status,
});

