export class doctorSearch {

  constructor(inputString) {
    this.inputString = inputString;
  }

  returnResults() {
    if (this.body.main.meta.total === 0) {
      return false;
    } else {
      return true;
    }
  }
}
