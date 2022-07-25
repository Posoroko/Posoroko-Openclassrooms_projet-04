import { modalRefs, formFields, errorNodes, submitBtn, confirmationPanel } from './domRefs_modal.js'
import { formValidation, initiateOnChangeEvents } from './validation.js';
import { launchModal, closeModal, showConfirmationPanel } from './display_modal.js'

let formWasSubmited = false

const requestSubmit = (e) => {
    e.preventDefault()

    if(!formWasSubmited) {
        formWasSubmited = true
        initiateOnChangeEvents()
    }
    if(formValidation()) {
        console.log('The form was validated and submited to the server!')
        modalRefs.form.reset()
        showConfirmationPanel()
    }
}


const initiateModalEvents = () => {
    modalRefs.modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
    modalRefs.close.addEventListener('click', closeModal)
    modalRefs.form.addEventListener('submit', requestSubmit)
    confirmationPanel.close.addEventListener('click', closeModal)
}


export { initiateModalEvents }