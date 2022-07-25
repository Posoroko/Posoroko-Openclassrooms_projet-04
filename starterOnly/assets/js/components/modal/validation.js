import { minAge, maxQuantity, minNameLength, maxNameLength } from '../../text_and_values/customValues.js'
import { errorMessages } from '../../text_and_values/errorMessages.js'
import { modalRefs, formFields, errorNodes, submitBtn } from './domRefs_modal.js'
import { showError, hideError } from './errorHandling.js'

const nameLengthIsValid = (string) => {
  if(string.length >= minNameLength && string.length <= maxNameLength) {
    return true
  }
}
const emailFormatIsValid = (string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(string)) {
    return true
  }
}

const userHasMinAge = (fieldValue) => {
  let today = new Date()
  let birthDate = new Date(fieldValue)
  let age = today.getFullYear() - birthDate.getFullYear()
  let monthDifference = today.getMonth() - birthDate.getMonth()
  if ( monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--
  }
  if (age >= minAge ) {
      return true
  } else {
    return false
  }
}

const quantityIsValid = (fieldValue) => {
    if (fieldValue > 0 && fieldValue <= maxQuantity ) {
        return true
    }
}

//
const firstNameValidation = () => {
    if (nameLengthIsValid(formFields.firstName.value)) {
        hideError(errorNodes.firstName)
        return true
    } else {
        showError(errorNodes.firstName, errorMessages.nameLength)
        return false
    }
}
const lastNameValidation = () => {
    if (nameLengthIsValid(formFields.lastName.value)) {
        hideError(errorNodes.lastName)
        return true
    } else {
        showError(errorNodes.lastName, errorMessages.nameLength)
        return false
    }
}
const emailValidation = () => {
    if(emailFormatIsValid(formFields.email.value)) {
        hideError(errorNodes.email)
        return true
    } else {
        showError(errorNodes.email, errorMessages.emailInvalid)
        return false
    }
}
const birthDateValidation = () => {
    if(!formFields.birthDate.value) {
        showError(errorNodes.birthDate, errorMessages.birthDateEmpty)
        return false
    }
    if(userHasMinAge(formFields.birthDate.value)) {
        hideError(errorNodes.birthDate)
        return true
    } else {
        showError(errorNodes.birthDate, errorMessages.underaged)
        
        return false
    }
}
const quantityValidation = () => {
    if(!formFields.quantity.value) {
        showError(errorNodes.quantity, errorMessages.quantityEmpty)
        return false
    }
    if(quantityIsValid(formFields.quantity.value)) {
        hideError(errorNodes.quantity)
        return true
    } else {
        showError(errorNodes.quantity, errorMessages.quantityTooHigh)
        return false
    }
}
const locationValidation = () => {
    if(!formFields.location.value) {
        showError(errorNodes.location, errorMessages.location)
        return false
    } else {
        hideError(errorNodes.location)
        return true
    }
}
const conditionsValidation = () => {

    if(!formFields.conditions.checked) {
        showError(errorNodes.conditions, errorMessages.conditions)
        return false
    } else{
        hideError(errorNodes.conditions)
        return true
    }
}

const formValidation = () => {
    let error = false
    if(!firstNameValidation()) {
        error = true
    }
    if(!lastNameValidation()) {
        error = true
    }
    if(!emailValidation()) {
        error = true
    }
    if(!birthDateValidation()) {
        error = true
    }
    if(!quantityValidation()) {
        error = true
    }
    if(!locationValidation()) {
        error = true
    }
    if(!conditionsValidation()) {
        error = true
    }

    if(!error) {
        return true
    } else {
        return false
    }
}
//once the form is submited, on change eventlisteners are initiated
// for certain fields. When the input is valid, the error message 
//is hidden.


const initiateOnChangeEvents = () => {

    formFields.firstName.addEventListener('change', firstNameValidation)
    formFields.lastName.addEventListener('change', lastNameValidation)
    formFields.email.addEventListener('change', emailValidation)
    formFields.birthDate.addEventListener('change', birthDateValidation)
    formFields.quantity.addEventListener('change', quantityValidation)
    let locations = document.querySelectorAll('.cityRadioBtn')
    locations.forEach(location => location.onclick = () => {
        locationValidation()
    })

    formFields.conditions.addEventListener('change', conditionsValidation)
}
export { formValidation, initiateOnChangeEvents }