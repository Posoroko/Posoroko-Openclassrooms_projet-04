import { modal } from './../dom-references/domReferences.js'

// open - close  modal
const launchModal = () => {
  modal.backdrop.style.display = "block";
}

const closeModal = () => {
  modal.backdrop.style.display = "none";
}


const initiateModalEventListeners = () => {

  modal.open.forEach((btn) => btn.addEventListener("click", launchModal));

  modal.close.addEventListener('click', () => {
    closeModal();
    modal.reserve.reset()
    reserve.style.display = "block";
    confirmationPanel.box.style.display = "none";
  })

  confirmationPanel.close.addEventListener('click', () => {
    closeModal();
    reserve.style.display = "block";
    confirmationPanel.box.style.display = "none";
  })
}

export { launchModal, initiateModalEventListeners }