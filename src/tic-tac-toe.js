class TicTacToe {
    constructor() {
      this.board = [[null, null, null], [null, null, null], [null, null, null]];
      this.x = 'x';
      this.o = 'o';
      this.player = this.x;
      this.winner = null;
    }

    getCurrentPlayerSymbol() {
      return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.board[rowIndex][columnIndex]){
        this.board[rowIndex][columnIndex] = this.player;
        let testHorizontal,
            testVertical,
            testDiagonalUpward,
            testDiagonalDownward;

        testHorizontal = this.board[rowIndex].every((val, ind, arr) => {
          return val === arr[0];
        });

        testVertical = this.board.every((val, ind, arr) => {
          return val[columnIndex] === arr[0][columnIndex];
        });

        if (this.board[2][0]){
          testDiagonalUpward = this.board.every((val, ind, arr) => {
            return val[arr.length - (1 + ind)] === arr[2][0];
          });
        }
        if (this.board[0][0]){
          testDiagonalDownward = this.board.every((val, ind, arr) => {
            return val[ind] === arr[0][0];
          });
        }

       if (testHorizontal || testVertical ||   testDiagonalUpward || testDiagonalDownward) {
         this.winner = this.player;
       }

       if(this.player === this.x) {
         this.player = this.o;
       } else {
         this.player = this.x;
       }
     }
    }

    isFinished() {
      if (this.winner || this.isDraw()) {
        return true;
      } else {
        return false;
      }
    }

    getWinner() {
      return this.winner;
    }

    noMoreTurns() {
      let noTurnsLeft = this.board.some(val => {
        let hasNull = val.some(num => num === null) ? false : true;
        return hasNull === false;
    })
      if (noTurnsLeft) {
        return false;
      }
      return true;
    }

    isDraw() {
      if (this.noMoreTurns() && !this.winner){
        return true;
      }
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
