import formValidationParams from '../../config/formParameters.js'
import errorMessages from '../../variables/errorMessages.js'
import { formFields, errorNodes } from './domRefs.js'
import { showError, hideError } from './errorHandling.js'

//string length and format verification, age calculation

const stringLengthIsValid = (string, minLength, maxLength) => {
    if(string.length >= minLength && string.length <= maxLength) {
        return true
      }

      return false
}

const emailFormatIsValid = (string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(string)) {
    return true
  }
  return false
}

const userHasMinAge = (fieldValue) => {
    let today = new Date()
    let birthDate = new Date(fieldValue)
    let age = today.getFullYear() - birthDate.getFullYear()
    let monthDifference = today.getMonth() - birthDate.getMonth()
    if ( monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    if (age >= formValidationParams.minAge ) {
        return true
    }  
    return false
}

const quantityIsValid = (fieldValue) => {
    if (fieldValue >= formValidationParams.minQuantity && fieldValue <= formValidationParams.maxQuantity ) {
        return true
    }

    return false
}

// handling inputs and errors on submission


const firstNameValidation = () => {
    if (stringLengthIsValid(formFields.firstName.value, formValidationParams.minNameLength, formValidationParams.maxNameLength)) {
        hideError(errorNodes.firstName)
        
        return true
    }
    
    showError(errorNodes.firstName, errorMessages.nameLength)
    
    return false
}

const lastNameValidation = () => {
    if (stringLengthIsValid(formFields.lastName.value, formValidationParams.minNameLength, formValidationParams.maxNameLength)) {
        hideError(errorNodes.lastName)
        
        return true
    }
    
    showError(errorNodes.lastName, errorMessages.nameLength)
    
    return false
}

const emailValidation = () => {
    if(emailFormatIsValid(formFields.email.value)
        && (stringLengthIsValid(formFields.email.value, formValidationParams.minEmailLength, formValidationParams.maxEmailLength))) {
        hideError(errorNodes.email)
        
        return true
    }
    
    showError(errorNodes.email, errorMessages.emailInvalid)
    
    return false
}

const birthDateValidation = () => {
    if(!formFields.birthDate.value) {
        showError(errorNodes.birthDate, errorMessages.birthDateEmpty)
        
        return false
    }
    if(userHasMinAge(formFields.birthDate.value)) {
        
        hideError(errorNodes.birthDate)
        
        return true
    }
    showError(errorNodes.birthDate, errorMessages.underaged)
    return false
}

const quantityValidation = () => {
    if(!formFields.quantity.value) {
        showError(errorNodes.quantity, errorMessages.quantityEmpty)
        return false
    }
    if(quantityIsValid(formFields.quantity.value)
        && (stringLengthIsValid(formFields.quantity.value.toString(), formValidationParams.minQuantityLength, formValidationParams.maxQuantityLength))) {
        hideError(errorNodes.quantity)
        return true
    }
    
    showError(errorNodes.quantity, errorMessages.quantityTooHigh)
    
    return false
}

const locationValidation = () => {
    if(!formFields.location.value) {
        showError(errorNodes.location, errorMessages.location)
        
        return false
    }
    
    hideError(errorNodes.location)
    
    return true
}

const conditionsValidation = () => {
    if(!formFields.conditions.checked) {
        showError(errorNodes.conditions, errorMessages.conditions)
        
        return false
    }
    
    hideError(errorNodes.conditions)
    
    return true
}

//on form submission

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

/**
 * once the form is submited, on change eventlisteners are initiated 
 * for certain fields. When the input is valid, the error message 
 * is hidden.
**/
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
