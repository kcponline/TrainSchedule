// 1. Initialize Firebase
// 2. Create button for adding new train - then update the html + update the database
// 3. Create a way to retrieve train from the train database.
// 4. Create a way to calculate the next arrival worked. Using difference between...
// 5. Calculate next arrival and minutes away


// Pseudo 01: check all links
// Pseudo 01a: check all links - jq - to be comment out
// $("#jq-check").html("JQ CHECK");
// Pseudo 01b: check all links - js - to be comment out
// document.getElementById("js-check").innerHTML = "JS CHECK";


// Pseudo 01c: check all links - Firebase
// Initialize Firebase
var config = {
	apiKey: "AIzaSyCIGOO1H64pnNMYoERNHRTlib8cpi2HKPM",
	authDomain: "trainschedule-26982.firebaseapp.com",
	databaseURL: "https://trainschedule-26982.firebaseio.com",
	storageBucket: "trainschedule-26982.appspot.com",
};

firebase.initializeApp(config);


var database = firebase.database();

// pseudo 01d: check all links - firebase
// $("#submit").on("click", function() {

// 	database.ref().set({
// 		firebasechk: "FIREBASE CHECK"
// 	});

// 	return false;

// });

// database.ref().on("value", function(snapshot) {

// 	var firebasechk = snapshot.val().firebasechk;

// 	$('#firebase-check').html(firebasechk);

// });


// pseudo 01e: check all links - momentjs
// var randomDate = "02/23/1999";
// var convertedDate = moment(new Date(randomDate));
// $('#momentjs-check').html("MOMENT CHECK: " + 
// moment(convertedDate).format("MMM DDD, YYYY hh:mm:ss"));


// Pseudo 02: Button for adding train - hard code skeleton (hcs)
$("#addTrainBtn").on("click", function(){

	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var destination = $("#destinationInput").val().trim();
	// hcs just to make sure saving to firebase
	var firstTrainTime = $("#firstTrainInput").val().trim();
	// apply momentjs and converts to unix time
	var firstTrainTime = moment($("#firstTrainInput").val().trim(), "HH:mm").format("X");
	var frequency = $("#frequencyInput").val().trim();// Error 01: typo in id name missing "Input"

	// Creates local "temporary" object for holding train data
	var newTrain = {
		trainName:  trainName,
		destination: destination,
		firstTrainTime: firstTrainTime,
		frequency: frequency
	}

	// Uploads train data to the database
	database.ref().push(newTrain);

	// Logs everything to console
	console.log(newTrain.trainName);
	console.log(newTrain.destination);
	console.log(newTrain.firstTrainTime);
	console.log(newTrain.frequency)

	// Alert
	alert("Train successfully added");

	// Clears all of the text-boxes
	// $("#trainNameInput").val("");
	// $("#destinationInput").val("");
	// $("#firstTrainInput").val("");
	// $("#frequencyInput").val("");

	// Prevents moving to new page
	return false;
});


// Pseudo 03: Create Firebase event for adding train to the database and a row 
// in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var trainName = childSnapshot.val().trainName;
	var destination = childSnapshot.val().destination;
	var firstTrainTime = childSnapshot.val().firstTrainTime;
	var frequency = childSnapshot.val().frequency;

	// Train Info
	console.log(trainName);
	console.log(destination);
	console.log(firstTrainTime);// Error 02: Typo in variable name missing "t"
	console.log(frequency);

	var timeNow = Date.now()
		console.log(timeNow)
	// Prettify the Next Arrival
	// var nextArrivalPretty = firstTrainTime;
	// Apply momentjs converts unix time back to HH:mm
	var nextArrivalPretty = moment.unix(firstTrainTime).format("HH:mm");
	
	var minutesAway = 20;
// 	var minutesAway = moment().diff(moment.unix(firstTrainTime, 'X'), "mm");
// 	console.log(firstTrainTime);

// 	// Calculate the total billed rate
// 	// var empBilled = empMonths * empRate;
// 	// console.log(empBilled);

	// Add each train's data into the table
	$("#trainTable > tbody").append(
	"<tr><td>" + trainName + 
	"</td><td>" + destination + 
	"</td><td>" + frequency + 
	"</td><td>" + nextArrivalPretty + 
	"</td><td>" + minutesAway);

});