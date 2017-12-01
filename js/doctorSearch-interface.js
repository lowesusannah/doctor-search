var apiKey = require('./../.env').apiKey;


import { DoctorSearch } from './../js/doctorSearch.js';

$(document).ready(function(){
  $('#submit').click(function(){
    event.preventDefault();
    $("#input").hide();
    let results = new doctorSearch $('#search-string-input');
    results.responses();
    $('#outcome').text(results.responses());
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
