// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)  
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB0yuuO-Ya9tO6d_AVStGNjn18h5kiA0gc",
    authDomain: "train-schedule-577da.firebaseapp.com",
    databaseURL: "https://train-schedule-577da.firebaseio.com",
    projectId: "train-schedule-577da",
    storageBucket: "",
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
  

//for now their is no billed time
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
		var tdMonthlyRate = $("<td>");
		tdMonthlyRate.text(childSnapshot.val().frequencyRate);
		tr.append(tdMonthlyRate);
		var tdBilledValue = $("<td>");
		tdBilledValue.text("?!?!?");
		tr.append(tdBilledValue);
		$("tbody").append(tr);
});


//current database value output

// database.ref("/employeeData").once("value", function(snapshot) {
// 	if(firstTime){
// 	snapshot.forEach(function(data) {
// 		var tr = $("<tr>");
// 		var trName = $("<td>");
// 		tdName.text(data.val().employeeName);
// 		tr.append(tdName);
// 		var tdRole = $("<td>");
// 		tdRole.text(data.val().Destination);
// 		tr.append(tdRole);
// 		var tdStartDate = $("<td>");
// 		tdStartDate.text(data.val().trainInputTime);
// 		tr.append(tdStartDate);
// 		var tdMonths = $("<td>");
// 		tdMonths.text("?!?!?!");
// 		tr.append(tdMonths);
// 		var tdMonthlyRate = $("<td>");
// 		tdMonthlyRate.text(data.val().employeeMonthlyRate);
// 		tr.append(tdMonthlyRate);
// 		var tdBilledValue = $("<td>");
// 		tdBilledValue.text("?!?!?");
// 		tr.append(tdBilledValue);
// 		$("tbody").append(tr);
// 		firstTime = false;
// 		// $("tbody").append("hello");
// 	 });

// }});