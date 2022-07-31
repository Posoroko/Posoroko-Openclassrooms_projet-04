import { modalRefs, confirmationPanel, formFields } from './domRefs.js'
import { formValidation, initiateOnChangeEvents } from './validation.js'
import { launchModal, closeModal, showConfirmationPanel } from './display.js'
import { handlePostRequest } from '../../server/serverRequests.js'

let formWasSubmited = false
let isPending = false

const requestSubmit = async (e) => {
    e.preventDefault()
    

    if(!formWasSubmited) {
        formWasSubmited = true
        initiateOnChangeEvents()
    }

    if(!formValidation()) {
        return
    }

    // handle state of submit button
    formFields.submit.value = "patientez..."
    formFields.submit.disabled = true

    //build object for posting to server

    let userData = {
        firstName: formFields.firstName.value,
        lastName: formFields.lastName.value,
        email: formFields.email.value,
        birthDate: formFields.birthDate.value,
        quantity: formFields.quantity.value,
        location: formFields.location.value,
        newsRequested: formFields.news.checked
    }

    await handlePostRequest(userData).then(res => {
        console.log(res.message)
    }).catch(err => {
        console.log(err)
    })

    formFields.submit.value = "C'est parti"
    formFields.submit.disabled = false

    modalRefs.form.reset()

    showConfirmationPanel()
    
}

const initiateModalEvents = () => {
    modalRefs.modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
    modalRefs.close.addEventListener('click', closeModal)
    modalRefs.form.addEventListener('submit', requestSubmit)
    confirmationPanel.close.addEventListener('click', closeModal)
}

export { initiateModalEvents }