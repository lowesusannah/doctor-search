var apiKey = require('./../.env').apiKey;


export class DoctorSearch {
  constructor( ) {

    }
      function getData( inputString, displayData ) {
        let promise = new Promise(function( resolve, reject ) {
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputString}&location=or-portland&user_location=45.523%2C122.676&skip=0&limit=10&user_key=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open ("GET", url, true);
      request.send();
    });

      promise.then(function(response) {
        body = JSON.parse(response);
        alert(body);
        return results(body);
      }, function(error) {
        return (`There was an error processing your request`);
      });
    }
}
