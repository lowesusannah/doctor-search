var apiKey = require('./../.env').apiKey;


export class DoctorSearch {
  constructor( ) {

    }
    getData( inputString, displayData ) {
        let promise = new Promise(function( resolve, reject ) {
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputString}&location=or-portland&user_location=45.523%2C122.676&skip=0&limit=10&user_key=${apiKey}`;
        console.log("url: " + url);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
          console.log("resolved");
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open ("GET", url, true);
      request.send();
      console.log("request opened");
    });

      promise.then(function(response) {
        console.log("response: " + response );
        let body = JSON.parse(response);
        console.log("body: " + body);
        return (body);
      }, function(error) {
        return (`There was an error processing your request`);
      });
    }
};
