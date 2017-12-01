var apiKey = require('./../.env').apiKey;


import { DoctorSearch } from './../js/doctorSearch.js';
$(document).ready(function(){
  $("#output").hide();
  $('#submit').click(function(){
    event.preventDefault();
    let inputString = $('#search-string-input').val();
    // let results = new DoctorSearch(inputString);
    // function -- if this.responseText - parsed into words (split(' ')).contains `${inputString}` then return/append item to list. Do a for loop through items and append each result name, address and website if responseText .contains the input string word;
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputString}&location=or-portland&user_location=45.523%2C122.676&skip=0&limit=10&user_key=${apiKey}`;

    $("#input").hide();
    $("#output").show();

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }


    request.open("GET", url, true);
    request.send();

    getElements = function(response) {
      alert("got to get Elements");
      alert("this.responseText");
      // $('#outcome').text(`${response.data.practices.name}`);
    }

    // $('#outcome').text(results.responses());
    // $("#outcome").text(inputString);
    // results.responses();
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
