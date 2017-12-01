# Doctor Search - Portland, OR Area

#### _An exploration in asynchronous JavaScript concepts, including API calls: Solo 8-hour Project using Behavior Driven Development(BDD) development pipeline and dependency management (npm, Bower, Gulp), ES6 syntax, December 1, 2017_


#### By _**Susannah Lowe**_

## Description
_This application takes a user's input search of a medical specialty or Dr. name, and returns a list of information about doctors in the Portland area._


## Setup/Installation Requirements
   * Node and Bower are installed on your machine globally
   * Knowledge of ES6 vocabulary and syntax
   * A free API key from BetterDoctor.com (go to their website to register)
   * Postman or other API test software of your preference; or knowledge of how to test API calls in your command line

  ### Installation Instructions:
    1. Clone project from GitHub repository, by copying and pasting the url of this GitHub repository following the $git clone command into your favorite command line program, such as Terminal on Mac.  
        - For example, $git clone https://github.com/nameOfUrl

    2. In the command line run the following commands at the root level of your cloned repository folder:
        - $npm install
        - $bower install
        - $gulp build
        - $gulp watch (to preview live server updates)

    3. It's recommended, but not required to test your API call in a API test, such as Postman.

    4. If needed, ready for production by running command $gulp build --production.


## Specifications

| Spec        | Example Input           | Example Output  |
| When user enters a name, app returns a list of doctors in Portland that meet that search criteria | Search query: "John" | Return: list of doctors who are in Portland whose data contains "john" |
| When user enters a medical issue/specialty, app returns a list of doctors in Portland that meet that search criteria |Search query: "Orthopedic"| Return: list of doctors who specialize in orthopedic medicine |
| If API call fails, error message is displayed | API call returns a status of failed (i.e. does not have a status of 200 OK)|
| If user enters a search query that does not return any results, a "no results found" message will display | Enter: "Orthapedic" (mis-spelling of orthopedic") | Result: "No matches found, please check your spelling or try a less specific search" |
=======


## Known Bugs

_None at this time._


## Support and contact details

_Please feel free to reach out with any questions, etc. to lowesusannah@gmail.com._


## Technologies Used

* ES6 (JavaScript)
* Node.js, including:
  - Bower
  - Gulp
* jQuery
* BetterDoctor.com API
* Postman

### License

*Developed under the MIT license.*

Copyright (c) 2017 **_Susannah Lowe_**
