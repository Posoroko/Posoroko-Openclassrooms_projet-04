function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
        modal.open.forEach((btn) => btn.addEventListener("click", launchModal));

// open - close  modal
        function launchModal() {
          modal.backdrop.style.display = "block";
        }

        modal.close.addEventListener('click', () => {
          modal.backdrop.style.display = "none";
          modal.reserve.reset()
          reserve.style.display = "block";
          confirmationPanel.box.style.display = "none";
        })

// confirmation panel
        
confirmationPanel.close_btn.addEventListener('click', () => {
          modal.backdrop.style.display = "none";
          reserve.style.display = "block";
          confirmationPanel.box.style.display = "none";
        })


//submit form

const validateFormFields = (e) => {  
  e.preventDefault();

  let errorFound = false;
  errorNode.all.forEach(item => item.style.display = "none");


  if (!fieldValidation.nameLength(reserve.first.value)) {
    showError(errorNode.firstName, errorMessage.nameLength);
    errorFound = true;
  }
  if (!fieldValidation.nameLength(reserve.last.value)) {
    showError(errorNode.lastName, errorMessage.nameLength);
    errorFound = true;
  }
  if (fieldValidation.email(reserve.email.value) === "empty") {
    showError(errorNode.email, errorMessage.emailEmpty);
    errorFound = true;
  } else if (fieldValidation.email(reserve.email.value) !== "valid") {
    showError(errorNode.email, errorMessage.emailInvalid);
    errorFound = true;
  }

  if (fieldValidation.birthDate(reserve.birthdate.value) === "empty") {
    showError(errorNode.birthDate, errorMessage.birthDateEmpty);
    errorFound = true;
  } else if (fieldValidation.birthDate(reserve.birthdate.value) === "underaged") {
    showError(errorNode.birthDate, errorMessage.underaged);
    errorFound = true;
  }

  if (fieldValidation.quantity(reserve.quantity.value) === "empty") {
    showError(errorNode.quantity, errorMessage.quantityEmpty);
    errorFound = true;
  } else if (fieldValidation.quantity(reserve.quantity.value) === "crazy!") {
    showError(errorNode.quantity, errorMessage.quantityTooHigh);
    errorFound = true;
  }
  if(!reserve.location.value) {
      showError(errorNode.location, errorMessage.location);
      errorFound = true;
  }
  if (!checkbox1_input.checked) {
    showError(errorNode.conditions, errorMessage.conditions);
    errorFound = true;
  }

  if(!errorFound) {
    submitForm()
  }
}

const submitForm = () => {
    //simulate form submission
    console.log("Form submitted to server. Thank you!")
    reserve.reset()
  
    //switch to confirmation panel
    reserve.style.display = "none";
    confirmationBox.style.display = "grid";
}