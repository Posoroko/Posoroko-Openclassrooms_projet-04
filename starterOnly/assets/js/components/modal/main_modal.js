import { modalRefs, formFields, errorNodes, submitBtn } from './domRefs_modal.js'
import { formValidation, initiateOnChangeEvents } from './validation.js';

// launch modal form
const launchModal = () => {
    modalRefs.background.style.display = "block";
}

const closeModal = () => {
    modalRefs.background.style.display = "none";
}

let formWasSubmited = false

const requestSubmit = (e) => {
    e.preventDefault()

    if(!formWasSubmited) {
        formWasSubmited = true
        initiateOnChangeEvents()
    }
    
    formValidation()
    
}

const initiateModalEvents = () => {
    modalRefs.modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
    modalRefs.close.addEventListener('click', closeModal)
    modalRefs.form.addEventListener('submit', requestSubmit)
}


export { initiateModalEvents }