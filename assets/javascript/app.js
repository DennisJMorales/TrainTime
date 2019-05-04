
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyANQmOuZW1lA-RVGGELaI65ohEN38yKGjM",
    authDomain: "clickbutton-db880.firebaseapp.com",
    databaseURL: "https://clickbutton-db880.firebaseio.com",
    projectId: "clickbutton-db880",
    storageBucket: "clickbutton-db880.appspot.com",
    messagingSenderId: "145688903605"
  };
  firebase.initializeApp(config)



  var database = firebase.database();

// 2. Button for adding trains
$("#addTrain").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var Name = $("#trainName").val().trim();
  var Destination = $("#Destination").val().trim();
  var Time = moment($("#firstTrainTime").val().trim(), "MM/DD/YYYY").format("X");
  var Frequent = $("#Frequency").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    Name: Name,
    Desti : Destination,
    startTime: Time,
    Frequ: Frequent
  };

  // Uploads tarin data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(Name.Name);
  console.log(Desti.Destination);
  console.log(startTime.Time);
  console.log(Freque.Frequent);

  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#trainName").val("");
  $("#Destination").val("");
  $("#firstTrainTime").val("");
  $("#Frequency").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var Name = childSnapshot.val().name;
  var Destination = childSnapshot.val().role;
  var Time = childSnapshot.val().start;
  var Frequent = childSnapshot.val().rate;


  // Employee Info
  console.log(Name);
  console.log(Destination);
  console.log(Time);
  console.log(Frequent);

  // Prettify the time start
  var timeAway = moment.unix(time).format("MM/DD/YYYY");


  var arrival = moment().diff(moment(timeAway, "X"), "minutes");
  console.log(arrival);

  // Calculate the total frequentTime
  var nextTrain = time * Frequent;
  

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(Name),
    $("<td>").text(Destination),
    $("<td>").text(Time),
    $("<td>").text(Frequent),
    $("<td>").text(timeAway),
    $("<td>").text(nextTrain)
  );
 
  // Append the new row to the table
  $("#employee-table > tbody").append(newRow);
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use meets this test case
