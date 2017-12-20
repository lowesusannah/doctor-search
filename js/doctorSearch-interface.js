import { DoctorSearch } from './../js/doctorSearch.js';

let displayData = function(response) {
  // response.forEach(function(body) {
    // $('#output').text(`The doctor name is ${body.data.practice.name}`);
  // });
};

$(document).ready(function(){
  $('#output').hide();
  $('#submit').click(function(){
    event.preventDefault();
    let inputString = $('#search-string-input').val();
    let doctorSearch = new DoctorSearch(inputString);
    $('#output').show();
    doctorSearch.getData(inputString, displayData);
    $('#output').append(`${final}`);
  });
});
