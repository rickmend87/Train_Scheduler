// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)  
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB0yuuO-Ya9tO6d_AVStGNjn18h5kiA0gc",
    authDomain: "train-schedule-577da.firebaseapp.com",
    databaseURL: "https://train-schedule-577da.firebaseio.com",
    projectId: "train-schedule-577da",
    storageBucket: "train-schedule-577da.appspot.com",
    messagingSenderId: "301659861642"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

//start building the input functions
$("#addTrain").on("click", function(event) {
  event.preventDefault();

  var trainName = $("#trainName").val().trim();
  var lineName = $("#lineNameInput").val().trim();
  var Destination = $("#Destination").val().trim();
  var trainInputTime = moment($("#trainInputTime").val().trim(), "HH:mm");
  var frequencyRate = $("#frequencyRate").val().trim();
  


	console.log("Submit has been established!");

  database.ref("/trainData").push({
  	trainName: trainName,
  	Destination: Destination,
  	trainInputTime: trainInputTime,
  	frequencyRate: frequencyRate
  });

 });
var firstTime = true;
//new values output
database.ref("/trainData").on("child_added", function(childSnapshot) {
		var tr = $("<tr>");
		var tdName = $("<td>");
			tdName.text(childSnapshot.val().trainName);
			tr.append(tdName);
		var tdDestination = $("<td>");
			tdDestination.text(childSnapshot.val().Destination);
			tr.append(tdDestination);
		var tdInputTime = $("<td>");
			tdInputTime.text(childSnapshot.val().trainInputTime);
			tr.append(tdInputTime);
		var tdFR = $("<td>");
			tdFR.text("?!?!?!");
			tr.append(tdFR);

// function Arrival
function getArrival(frequencyRate, trainInputTime)
{
	var firstTrain = moment(trainInputTime, "hh:mm")
	var timeDiff = moment().diff(moment(firstTrain), "minutes");
	var timeAway = timeDiff % frequencyRate;
	var timeMins = frequencyRate - timeAway;
	var nextTrain = moment(moment().add(timeMins, "minutes")).format("HH:mm");

	return obj = {
		timeMin: timeMins,
		nextTrain: nextTrain
	}
}

// I got 2 uncaught typeErrors
		
});
