//this connects the app to Angular
var app = angular.module('tttApp', ['firebase']);

//this activates the controller to specified area in html with scope specificiations
app.controller('tttController', function($scope, $firebase){
	
	var ref=new Firebase('https://tic-tac-toe-lotr.firebaseio.com/board');
	var sync = $firebase(ref);
	$scope.board=sync.$asArray();
	//Set up the number of moves counter in Firebase
	var counterRef=new Firebase('https://tic-tac-toe-lotr.firebaseio.com/counter');
	//Create AngularFire reference to data
	var counterSync = $firebase(counterRef);
	//download the data into an array
	$scope.counter=counterSync.$asArray();

	//Set up the array of x moves and o moves in Firebase
	//x moves is the first record under playerMoves
	//0 moves is the second record under playerMoves
	var playerMovesRef = new Firebase('https://tic-tac-toe-lotr.firebaseio.com/playerMoves');
	var playerMovesSync = $firebase(playerMovesRef);
	$scope.playerMoves = playerMovesSync.$asArray();

	//Set up variable to hold true/false for if someone won, who won, and if it's a cat's game
	var someoneWonRef = new Firebase('https://tic-tac-toe-lotr.firebaseio.com/someoneWon');
	var someoneWonSync = $firebase(someoneWonRef);
	$scope.someoneWon= someoneWonSync.$asArray();




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
