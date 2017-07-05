// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const exampleMatrix = [
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5],
];

const rotateMatrix = (matrix) => {
  const dimension = matrix.length;
  for (let x = 0; x < dimension; x++) {
    for (let y = x; y < dimension - x - 1; y++) {
      // store top left in temp
      let temp = matrix[x][y];
      // move bottom left to top left
      matrix[x][y] = matrix[dimension - 1 - y][x];
      // move bottom right to bottom left
      matrix[dimension - 1 - y][x] = matrix[dimension - 1 - x][dimension - 1 - y];
      // move top right to bottom right
      matrix[dimension - 1 - x][dimension - 1 - y] = matrix[y][dimension - 1 - x];
      // put temp in top right
      matrix[y][dimension - 1 - x] = temp;
    }
  }
  return matrix;
};

rotateMatrix(exampleMatrix);
console.log(exampleMatrix);
