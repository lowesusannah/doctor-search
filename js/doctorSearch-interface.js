var apiKey = require('./../.env').apiKey;


import { DoctorSearch } from './../js/doctorSearch.js';
$(document).ready(function(){
  $("#output").hide();
  $('#submit').click(function(){
    event.preventDefault();
    $("#input").hide();
    $("#output").show();
    let inputString = $('#search-string-input').val();
    $("#outcome").text(inputString);
    // let results = new DoctorSearch(inputString);
    // results.responses();
    // $('#outcome').text(results.responses());
  });
});


  // $('#droppable').droppable({
  //   drop: function() {
  //    if $('draggable').hasClass('small') {
  //      whatever.eatSmall();
  //    } else {
  //      if $('draggable').hasClass('medium') {
  //        whatever.eatMedium();
  //      }
  //    }
  //
  //     $('#outcome').text(whatever.foodLevel);
  //   }
