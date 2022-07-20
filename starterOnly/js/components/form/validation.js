import { formFields } from '../../dom-references/pages/indexRefs.js'
import { showError } from 'errorHandling.js'


// minimum and maximum values

//required minimum age to participate
    const minAge = 18

// maximum quantity of previous participations
    const maxQuantity = 99

// -------------- //





const validateNameLength = (name) => {
    if(name.length > 2 && name.length < 26) {
        return true
    }
}
const validateEmail = (email) => {
    if (!email) {
        return 'empty'
    }
    if (/^\w+[\.-]?\w+*@\w+[\.-]?\w+*\.\w{2,3}+$/.test(email)) {
        return "valid"
    }
}
const validateBirthDate = (fieldValue) => {
    if (!fieldValue) {
        return "empty"
    }
    let today = new Date()
    let birthDate = new Date(fieldValue)
    let age = today.getFullYear() - birthDate.getFullYear()
    let monthDifference = today.getMonth() - birthDate.getMonth()
    if ( monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    if (age < minAge ) {
        return "underaged"
    }
}
const validateQuantity = (fieldValue) => {
    if (!fieldValue) {
        return "empty"
    }
    if (fieldValue < 0 || fieldValue > maxQuantity ) {
        return "crazy!"
    }
}




//once the form was submited, an eventlisteners are added to get rid of error messages when the entry is valid

let formWasSubmited = false

const addOnChangeListeners = () => {
    formFields.firstName.addEventListener('change', () => {
        
    }
}

const checkAllFormFields = (e) => {
  
    let errorFound = false;
    errorNode.all.forEach(item => item.style.display = "none");
  
  
    if (!validateNameLength(reserve.first.value)) {
      showError(errorNode.firstName, errorMessage.nameLength);
      errorFound = true;
    }
    if (!validateNameLength(reserve.last.value)) {
      showError(errorNode.lastName, errorMessage.nameLength);
      errorFound = true;
    }
    if (validateEmail(reserve.email.value) === "empty") {
      showError(errorNode.email, errorMessage.emailEmpty);
      errorFound = true;
    } else if (validateEmail(reserve.email.value) !== "valid") {
      showError(errorNode.email, errorMessage.emailInvalid);
      errorFound = true;
    }
  
    if (validateBirthDate(reserve.birthdate.value) === "empty") {
      showError(errorNode.birthDate, errorMessage.birthDateEmpty);
      errorFound = true;
    } else if (validateBirthDate(reserve.birthdate.value) === "underaged") {
      showError(errorNode.birthDate, errorMessage.underaged);
      errorFound = true;
    }
  
    if (validateQuantity(reserve.quantity.value) === "empty") {
      showError(errorNode.quantity, errorMessage.quantityEmpty);
      errorFound = true;
    } else if (validateQuantity(reserve.quantity.value) === "crazy!") {
      showError(errorNode.quantity, errorMessage.quantityTooHigh);
      errorFound = true;
    }
    if(!reserve.location.value) {
        showError(errorNode.location, errorMessage.location);
        errorFound = true;
    }
    if (!checkbox1.checked) {
      showError(errorNode.conditions, errorMessage.conditions);
      errorFound = true;
    }
  
    if(!errorFound) {
        return true
    } else {
        formWasSubmited = true
        addOnChangeListeners()
        return false
    }
  }



export { validateNameLength, validateEmail, validateBirthDate, validateQuantity, checkAllFormFields }