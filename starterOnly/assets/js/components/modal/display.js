import { modalRefs, confirmationPanel } from "./domRefs.js"


// launch modal form
const launchModal = () => {
    modalRefs.background.style.display = "block"
}

const closeModal = () => {
    confirmationPanel.panel.style.display = "none"
    modalRefs.form.style.display = "block"
    modalRefs.background.style.display = "none"
}

const showConfirmationPanel = () => {
    modalRefs.form.style.display = "none"
    confirmationPanel.panel.style.display = "block"
}


export { launchModal, closeModal, showConfirmationPanel }