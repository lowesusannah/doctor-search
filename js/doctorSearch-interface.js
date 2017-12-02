var apiKey = require('./../.env').apiKey;

import { DoctorSearch } from './../js/doctorSearch.js';
$(document).ready(function(){
  $("#output").hide();
  $('#submit').click(function(){
    event.preventDefault();
    $("#input").hide();
    let inputString = $('#search-string-input').val("");
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputString}&location=or-portland&user_location=45.523%2C122.676&skip=0&limit=10&user_key=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
      }
    };
  request.open ("GET", url, true);
  request.send();
});

  promise.then(function(response) {
    $("#output").show();
    let body = JSON.parse(response);
    alert(JSON.parse(response));
      if (`${body.response.returnResults}` === true) {
        alert("true");
        $('#show-name').text(`${body.main.data.practices.name}`);
        $('#show-website').text(`${body.main.data.practices.website}`);
      } else {
        $('#show-name').hide();
        $('#show-website').hide();
        alert("no responses for search");
        $('#output').append("Sorry, your search returned 0 results. Please check your spelling, or try making your search criteria more general, and try again");
      }
  }, function(error) {
    $("#show-error").text(`There was an error processing your request`);
    });
  });
});
