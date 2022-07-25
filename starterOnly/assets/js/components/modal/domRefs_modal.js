const modalRefs = {
    background: document.querySelector(".bground"),
    modalBtn: document.querySelectorAll(".modal-btn"),
    form: document.getElementById('reserve'),
    close: document.querySelector('.close')
}   

const formFields = { 
    firstName: document.getElementById('first'),
    lastName: document.getElementById('last'),
    email: document.getElementById('email'),
    birthDate: document.getElementById('birthdate'),
    quantity: document.getElementById('quantity'),
    location: modalRefs.form.location,
    conditions: document.getElementById('checkbox1'),
    news: document.getElementById('checkbox2')
}

const errorNodes = {
    firstName: document.getElementById('firstNameError'),
    lastName: document.getElementById('lastNameError'),
    email: document.getElementById('emailError'),
    birthDate: document.getElementById('birthDateError'),
    quantity: document.getElementById('quantityError'),
    location: document.getElementById('locationError'),
    conditions: document.getElementById('conditionsError')
}
const confirmationPanel = {
    panel: document.getElementById('confirmationPanel'),
    close: document.getElementById('confirmationCloseButton')
}

const submitBtn = document.getElementById('submitBtn')

export { modalRefs, formFields, errorNodes, submitBtn, confirmationPanel }
