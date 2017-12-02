var apiKey = require('./../.env').apiKey;

import { DoctorSearch } from './../js/doctorSearch.js';


$(document).ready(function(){
  $("#output").hide();
  $('#submit').click(function(){
    event.preventDefault();
    $("#input").hide();
    let inputString = $('#search-string-input').val("");
    // let search = new DoctorSearch(inputString);
    let promise = new Promise(function(resolve, reject) {
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputString}&location=or-portland&user_location=45.523%2C122.676&skip=0&limit=10&user_key=${apiKey}`;
      const request = new XMLHttpRequest();
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
      alert(`${body.data.practices[0].name}`);
      alert(`${body.data.practices[0].website}`);
    // $('#show-name').text(`${body}`);
  }, function(error) {
    $("#show-error").text(`There was an error processing your request`);
    });
  });
});
