// Pseudo 01: check all links
// Pseudo 01a: check all links - jq - to be comment out
$("#jq-check").html("JQ CHECK");
// Pseudo 01b: check all links - js - to be comment out
document.getElementById("js-check").innerHTML = "JS CHECK";


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
$("#submit").on("click", function() {

	database.ref().set({
		firebasechk: "FIREBASE CHECK"
	});

	return false;

});

database.ref().on("value", function(snapshot) {

	var firebasechk = snapshot.val().firebasechk;

	$('#firebase-check').html(firebasechk);

});


// pseudo 01e: check all links - momentjs
var randomDate = "02/23/1999";
var convertedDate = moment(new Date(randomDate));
$('#momentjs-check').html("MOMENT CHECK: " + moment(convertedDate).format("MMM DDD, YYYY hh:mm:ss"));