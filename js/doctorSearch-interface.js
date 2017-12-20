import { DoctorSearch } from './../js/doctorSearch.js';

let displayData = function(response) {
  results.forEach(function(response) {
    $('#output').append('<p>' + response + '</p>');
  });
};

$(document).ready(function(){
  $('#output').hide();
  $('#submit').click(function(){
    event.preventDefault();
    let inputString = $('#search-string-input').val();
    let doctorSearch = new DoctorSearch(inputString);
    $('#output').show();
    doctorSearch.getData(inputString, displayData);
  });
});
