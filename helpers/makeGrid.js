import { makeRow } from "./makeRow";

export const makeGrid = (gridSize, topLeftColor, topRightColor, bottomLeftColor, bottomRightColor) => {
  const grid = [];
  const firstRow = 0;
  const lastRow = gridSize - 1;
  grid[firstRow] = makeRow(gridSize, topLeftColor, topRightColor);
  grid[lastRow] = makeRow(gridSize, bottomLeftColor, bottomRightColor);
  // loop over each index and make an array representing the column
  for (let i = 0; i < gridSize; i += 1) {
    const column = makeRow(gridSize, grid[firstRow][i], grid[lastRow][i]);
    for (let j = 1; j <= lastRow - 1; j += 1) {
      // if grid[j] doesn't exist yet create it
      if (!grid[j]) {
        grid[j] = [];
      }
      // take j index of column and set it to the i index in the array that is the j index
      grid[j][i] = column[j];
    }
  }
  return grid;
};