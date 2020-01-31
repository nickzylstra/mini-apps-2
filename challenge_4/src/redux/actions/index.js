const CELL_CLICKED = 'CELL_CLICKED';

const clickCell = (cell) => ({
  type: CELL_CLICKED,
  cell,
});

export const types = {
  CELL_CLICKED,
}

export const creators = {
  clickCell,
}