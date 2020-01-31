const CLICK_CELL = 'CLICK_CELL';

const clickCell = (cell) => ({
  type: CLICK_CELL,
  cell,
});

export const types = {
  CLICK_CELL,
}

export const creators = {
  clickCell,
}