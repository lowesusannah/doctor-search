import { DoctorSearch } from './../js/doctorSearch.js';

let displayData = function(results) {
    $('#output').append('<p>' + results + '</p>');
};


$(document).ready(function(){
  $("#output").hide();
  $('#submit').click(function(){
    event.preventDefault();

    // $("#input").hide();
    $('#output').show();

    let inputString = $('#search-string-input').val();
    let doctorSearch = new DoctorSearch(inputString);
    doctorSearch.getData(displayData);
  });
});
