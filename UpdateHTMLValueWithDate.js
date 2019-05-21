**
 * Locates a specific date field using the query selector
 * method. Increments the current date and modifies the
 * value of this field.
 *
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

    // Set the number of days in the future of the current date
    const moreDays = 15;

    const date = new Date();
    date.setDate(date.getDate() + moreDays);

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    // Pads the month and day by one zero if it is less than 10
    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    // Returns a string in the format YYYY-MM-DD
    var updatedDate = year + '-' + month + "-" + day;

    // Locates the field using the ID
    let paymentDate = document.querySelector('#PaymentStartDate');

    if (!paymentDate) {
      throw Error("Element cannot be found");
    }

    // Updates the value of the element with the new date
    paymentDate.setAttribute('value', updatedDate);
    paymentDate.value = updatedDate;
    paymentDate.dispatchEvent(new Event("change"));

    callback(true);
}
