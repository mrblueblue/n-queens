/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined;

  var board = new Board({n:n});

  var addRook = function(rowsLeft){

    if (rowsLeft === 0){
      console.log(board.rows())
      return;
    } else {
      var row = board.get(n-rowsLeft);

      _.each(row, function(value,index){
        row[index]=1;
        if ( board.hasRowConflictAt(n-rowsLeft) || board.hasColConflictAt(index) ){
          row[index]=0;
        }
      });
      addRook(rowsLeft-1);
    }
  };

  addRook(n);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return board.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutions = [];

  var board = new Board({n:n});

  var counter = 0;

  var addRook = function(rowsLeft){

    if (rowsLeft === 0){
      if(counter === n){
        solutions.push(board.rows().slice());
      }
      return;
    } else {
      var row = board.get(n-rowsLeft);

      _.each(row, function(value,index){
        row[index]=1;
        counter++
        if ( !(board.hasRowConflictAt(n-rowsLeft) || board.hasColConflictAt(index)) ){
          addRook(rowsLeft-1);
        }
        row[index]=0;
        counter--
      });

    }


  };

  addRook(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutions.length);
  console.dir(solutions)
  return solutions.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
