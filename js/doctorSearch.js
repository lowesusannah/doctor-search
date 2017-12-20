var apiKey = require('./../.env').apiKey;


export class DoctorSearch {
  constructor( ) {

    }
    getData( inputString, displayData ) {
        let promise = new Promise(function( resolve, reject ) {
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
      let body = JSON.parse(response);

      let result0 = (
        `Name: ${body.data[0].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}

        Address: ${body.data[0].practices[0].visit_address.street}
                  ${body.data[0].practices[0].visit_address.street2}
                  ${body.data[0].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[0].practices[0].visit_address.zip}

        Phone: ${body.data[0].practices[0].phones[0].number}
        Website: ${body.data[0].practices[0].website}
        Accepting New Patients: ${body.data[0].practices[0].accepts_new_patients}

        `);

    let result1 = (
        `Name: ${body.data[1].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}

        Address: ${body.data[1].practices[0].visit_address.street}
            ${body.data[1].practices[0].visit_address.street2}
            ${body.data[1].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[1].practices[0].visit_address.zip}

        Phone: ${body.data[1].practices[0].phones[0].number}
        Website: ${body.data[1].practices[0].website}
        Accepting New Patients: ${body.data[1].practices[0].accepts_new_patients}

        `);

    let result2 = (
        `Name: ${body.data[2].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}

        Address: ${body.data[2].practices[0].visit_address.street}
            ${body.data[2].practices[0].visit_address.street2}
            ${body.data[2].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[2].practices[0].visit_address.zip}

        Phone: ${body.data[2].practices[0].phones[0].number}
        Website: ${body.data[2].practices[0].website}
        Accepting New Patients: ${body.data[2].practices[0].accepts_new_patients}

        `);

    let result3 = (
        `Name: ${body.data[3].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}

        Address: ${body.data[3].practices[0].visit_address.street}
            ${body.data[3].practices[0].visit_address.street2}
            ${body.data[3].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[3].practices[0].visit_address.zip}

        Phone: ${body.data[3].practices[0].phones[0].number}
        Website: ${body.data[3].practices[0].website}
        Accepting New Patients: ${body.data[3].practices[0].accepts_new_patients}

        `);

    let result4 = (
        `Name: ${body.data[4].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}

        Address: ${body.data[4].practices[0].visit_address.street}
            ${body.data[4].practices[0].visit_address.street2}
            ${body.data[4].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[4].practices[0].visit_address.zip}

        Phone: ${body.data[4].practices[0].phones[0].number}
        Website: ${body.data[4].practices[0].website}
        Accepting New Patients: ${body.data[4].practices[0].accepts_new_patients}

        `);

    let result5 = (
        `Name: ${body.data[5].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}

        Address: ${body.data[5].practices[0].visit_address.street}
            ${body.data[5].practices[0].visit_address.street2}
            ${body.data[5].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[5].practices[0].visit_address.zip}

        Phone: ${body.data[5].practices[0].phones[0].number}
        Website: ${body.data[5].practices[0].website}
        Accepting New Patients: ${body.data[5].practices[0].accepts_new_patients}

        `);

    let result6 = (
        `Name: ${body.data[6].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}

        Address: ${body.data[6].practices[0].visit_address.street}
            ${body.data[6].practices[0].visit_address.street2}
            ${body.data[6].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[6].practices[0].visit_address.zip}

        Phone: ${body.data[6].practices[0].phones[0].number}
        Website: ${body.data[6].practices[0].website}
        Accepting New Patients: ${body.data[6].practices[0].accepts_new_patients}

        `);

    let result7 = (`Name:${body.data[7].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}
        Address:${body.data[7].practices[0].visit_address.street}
            ${body.data[7].practices[0].visit_address.street2}
            ${body.data[7].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[7].practices[0].visit_address.zip}
        Phone:${body.data[7].practices[0].phones[0].number}
        Website:${body.data[7].practices[0].website}
        Accepting New Patients:${body.data[7].practices[0].accepts_new_patients}
        `);

    let result8 = (
        `Name: ${body.data[8].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}

        Address: ${body.data[8].practices[0].visit_address.street}
            ${body.data[8].practices[0].visit_address.street2}
            ${body.data[8].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[8].practices[0].visit_address.zip}

        Phone: ${body.data[8].practices[0].phones[0].number}
        Website: ${body.data[8].practices[0].website}
        Accepting New Patients: ${body.data[8].practices[0].accepts_new_patients}

        `);


    let result9 = (
        `Name: ${body.data[9].profile.first_name} ${body.data[0].profile.last_name}, ${body.data[0].profile.title}

        Address: ${body.data[9].practices[0].visit_address.street}
            ${body.data[9].practices[0].visit_address.street2}
            ${body.data[9].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state} ${body.data[9].practices[0].visit_address.zip}

        Phone: ${body.data[9].practices[0].phones[0].number}
        Website: ${body.data[9].practices[0].website}
        Accepting New Patients: ${body.data[9].practices[0].accepts_new_patients}
        `);

    let final = result0, result1, result2, result3, result4, result5, result6, result7, result8, result9;
    return (`${final}`);

    },
    function(error) {
      return (`There was an error processing your request`);
    });
  }
}
