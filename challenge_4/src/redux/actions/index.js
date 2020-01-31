const CLICK_CELL = 'CLICK_CELL';

const clickCell = (cell) => ({
  type: CLICK_CELL,
  cell,
});

export default {
  types: {
    CLICK_CELL,
  },
  creators: {
    clickCell,
  }
}