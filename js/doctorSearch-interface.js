import { DoctorSearch } from './../js/doctorSearch.js';

 let displayData = function(results) {
  results.forEach(function(result) {
    $('#output').append('<p>' + results + '</p>');
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
