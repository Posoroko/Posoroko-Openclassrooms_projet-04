console.log('eric')
// import { modal, formField, confirmationPanel, errorNode } from '/dom-references/pages/indexRefs.js'
// import { checkAllFormFields } from '/components/signup-modal/validation.js'
import { launchModal, initiateModalEventListeners } from './components/signup-modal/modal-main.js'

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


const requestFormSubmission = (e) => {

    e.preventDefault()

    if(checkAllFormFields) {
      submitForm()
    }
}



//submit form
  const submitForm = () => {
    //simulate form submission
    console.log("Form submitted to server. Thank you!")
    reserve.reset()
  
    //switch to confirmation panel
    reserve.style.display = "none";
    confirmationBox.style.display = "grid";
}

initiateModalEventListeners()
