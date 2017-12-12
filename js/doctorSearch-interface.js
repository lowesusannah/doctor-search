import { DoctorSearch } from './../js/doctorSearch.js';

// let displayData = function(results) {
//   results.forEach(function(result) {
//     $('#output').append('<li>' + result.name + '</li>');
//   });
// };

$("#output").hide();
$(document).ready(function(){
  $('#submit').click(function(){
    event.preventDefault();

    $("#input").hide();
    $('#output').show();
    let inputString = $('#search-string-input').val("");
    applicationModule.getData(userInput, displayData);

      promise.then(function(response) {
        let body = JSON.parse(response);
        alert(`${body.data.practices[0].name}`);
        alert(`${body.data.practices[0].website}`);
        }, function(error) {
        alert(`There was an error processing your request`);
      });
    });
  });
