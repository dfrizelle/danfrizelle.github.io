/* TO DO:
    - [complete] name field (only letters and  -. signs are valid)
    - [complete] email field (should validate a proper email address)
    - [complete] phone number (only numbers and +- signs are valid)
    - [complete] message field (field without any restrictions) 
*/

function lettersOnly(event) {
    const charCode = event.charCode;
    // ASCII Printable Characters. 
    // (A-Z) || (a-z) || (-) || (carriage return/enter) || (space)
    if ((charCode > 64 && charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==45 || event.charCode==46) || (event.charCode==13) || (event.charCode==32))
    return true;
    else
    return false;
}
function numbersOnly(event) {
    const charCode = event.charCode;
    // ASCII Printable Characters. 
    // (0-9) || (+) || (-) || (carriage return/enter)
    if ((charCode > 47 && charCode < 58) || (event.charCode==43 || event.charCode==45) || (event.charCode==13))
    return true;
    else
    return false;
}

/* Contact form validation */
function validate() {
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    // NAME - Checks if name field is empty, if so alert the user and highlights field.
    if (document.myForm.Name.value == "") {
        alert("Please provide your name.");
        document.myForm.Name.focus();
        return false;
    }
    // EMAIL - Checks if email field is empty, if so alert the user and highlights field.
    // If the field isn't empty, checks for a valid email address [@ before .]
    if (document.myForm.EMail.value == "") {
        alert("Please provide your email.");
        document.myForm.EMail.focus();
        return false;
    } else if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter a valid email address.")
        document.myForm.EMail.focus();
        return false;
    }
    // NUMBER - Checks if number field is empty, if so alert the user and highlights field.
    // If not empty, checks length of number value, if this is less than 11 alert user that the number isn't long enough.
    // If longer than 15, alert user saying it's too long.
    if (document.myForm.Num.value == "") {
        alert("Please provide a phone number.");
        document.myForm.Num.focus();
        return false;
    } else if (document.myForm.Num.value.length < 11) {
        alert("Phone number is not long enough.");
        return false;
    } else if (document.myForm.Num.value.length > 15) {
        alert("Phone number is too long.");
        return false;
    }
    return (true);
}