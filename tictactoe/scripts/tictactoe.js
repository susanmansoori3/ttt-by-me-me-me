//this connects the app to Angular
var app = angular.module('tttApp', ['firebase']);

//this activates the controller to specified area in html with scope specificiations
app.controller('tttController', function($scope, $firebase){
	
	var boardRef = new Firebase("https://tic-tac-toe-lotr.firebaseio.com/board");
	var boardSync = $firebase(boardRef);
	$scope.board = boardSync.$asArray();

	var counterRef = new Firebase("https://tic-tac-toe-lotr.firebaseio.com/counter");
	var counterSync = $firebase(counterRef);
	$scope.counter = counterSync.$asArray();

	var winnerRef = new Firebase("https://tic-tac-toe-lotr.firebaseio.com/winner");
	var winnerSync = $firebase(winnerRef);
	$scope.winner = winnerSync.$asArray();

	var playerRef = new Firebase("https://tic-tac-toe-lotr.firebaseio.com/player");
	var playerSync = $firebase(playerRef);
	$scope.player = playerSync.$asArray();

	$scope.board.$loaded(function(){
		if($scope.board.length == 0){
			for(var i = 0; i < 9; i++){
				$scope.board.$add({playerMove:""});
			}
		}
		else{
			for(var i = 0; i <9; i++){
				$scope.board[i].playerMove ="";
				$scope.board.$save(i);
			}
		}
		
	});

	$scope.counter.$loaded(function(){
		if($scope.counter.length == 0){
			$scope.counter.$add({turn:0});
		}
		else if($scope.counter[0].turn < 0){
			$scope.counter[0].turn = 0;
			$scope.counter[0].$save(0);
		}

		else {
			$scope.counter[0].turn = 0;
			$scope.counter.$save(0);
		}
		
	});






  	// $scope.counter.$loaded(function () {
   //      if ($scope.counter.length === 0) {
   //          $scope.counter.$add({turnCounter: 0});
   //      } else {
   //          $scope.counter[0].turnCounter = 0;
   //          $scope.counter.$save($scope.counter[0]);
   //      }
   //  });



//creates 3 arrays with this.board and each has 3 spaces
	$scope.board = [["", "", ""], ["", "", ""], ["", "", ""]];

//OVERALL game object-- including 1. array with hard coded cells in the board 2. establishes p1 & p2
			//QUESTION does the board array in object below create reference numbers to above board???????
	$scope.game = {board: [1, 2, 3, 4, 5, 6, 7, 8, 9], p1: "X", p2: "O"};

	// $scope.squareClick = function(row, col){
	// 	$scope.board[row][col] = "I got clicked!!!";
	// };

	//creates turnNum variable starting at 0
	$scope.turnNum = 0;

	$scope.game.p1.onclick





	/*win condition logic --
		for loop establishing index of 0, 1, 2
	*/
	function winConditions(piece){
		// console.log($scope.turnNum);
		for(var i = 0; i < 3; i++){
			//horizontal win
			if(($scope.board[i][0] == $scope.board[i][1]) && ($scope.board[i][0] == $scope.board[i][2]) && ($scope.board[i][0] != "")){
				alert(piece + " wins!");
			}
			// vertical win
			else if(($scope.board[0][i] == $scope.board[1][i]) && ($scope.board[0][i] == $scope.board[2][i]) && ($scope.board[0][i] != "")){
				alert(piece + " wins!");
			}
			else if($scope.turnNum == 9){
				alert("Meow game");
				$scope.turnNum = 0;
			}
		}
		//diagnol(s) win
		if(($scope.board[0][0] == $scope.board[1][1]) && ($scope.board[0][0] == $scope.board[2][2]) && ($scope.board[0][0] != "")){
				alert(piece + " wins!");
			}
		else if(($scope.board[0][2] == $scope.board[1][1]) && ($scope.board[0][2] == $scope.board[2][0]) && ($scope.board[0][2] != "")){
			alert(piece + " wins!");
		}
	}

	// $scope.turnNum = 0;
	//this function determines if the turn is on an even number, if so, then you choose X else choose O
	$scope.makeMove = function(row, col){
		if($scope.board[row][col] == ""){
			//setting variable piece equal to condition: if turn # is even, then choose X, otherwise, choose O
			var piece = ($scope.turnNum % 2) == 0 ? "X" : "O";
			// set [row][col] parameter to piece activating X or O to winConditions function's parameter
			$scope.board[row][col] = piece;
			// parses through turn numbers
			$scope.turnNum++;
			//calls the winConditions function
			winConditions(piece);
		}
	};



	// $scope.squareClick = function(index){
	// 	$scope.board[Math.floor(index / 3)][index % 3] = "I got clicked!!!";
	// };

	console.log($scope);

});
