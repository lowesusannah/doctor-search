var apiKey = require('./../.env').apiKey;


export class DoctorSearch {
  constructor(inputString) {
      this.inputString = inputString;
      getData(displayData) {
        let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        alert(inputString);
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.inputString}&location=or-portland&user_location=45.523%2C122.676&skip=0&limit=10&user_key=${apiKey}`;
        alert(url);
      }
    };
  }
}

//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//           alert("resolved");
//         } else {
//           alert("rejected");
//           reject(Error(request.statusText));
//         }
//         alert('requested');
//         request.open ("GET", url, true);
//         request.send();
//       };
//     });
//
//     promise.then(function(response) {
//       body = JSON.parse(response);
//       alert(body);
//       return results(body);
//     }, function(error) {
//     return (`There was an error processing your request`);
//     });
//   }
// }
