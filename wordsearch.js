const transpose = function(matrix) {
  
    let answer = []
    for (let i = 0; i < matrix[0].length; i++){
      answer.push([]);
    }
  
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
         answer[y][x] = matrix[x][y];
      }
    }
        return answer;
  };


const wordSearch = (letters, word) => {

    const vertical = transpose(letters);

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    const verticalJoin = vertical.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false
  }
  
  
  module.exports = wordSearch
 

