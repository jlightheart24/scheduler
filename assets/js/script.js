var timeBlockNotes = {};

//Display Current Time
var displayCurrentTime = function() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').append(currentTime);
};

//Save text in time blocks
var saveNotes = function() {
    localStorage.setItem('notes', JSON.stringify(timeBlockNotes));
};


// var loadNotes = function() {
//     if(!timeBlockNotes) {
//         timeBlockNotes = {
//             innerText: [],
//             timeBlock: [],
//         }
//     }
// };

displayCurrentTime();



