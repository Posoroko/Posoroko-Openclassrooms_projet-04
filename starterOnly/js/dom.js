//modal element=

const modal = {
    backdrop: document.querySelector(".bground"),
    open: document.querySelectorAll(".modal-btn"),
    close: document.querySelector('.close'),
    btnSubmit: document.querySelector('.btn-submit'),
    reserve: document.getElementById('reserve'),
    formData: document.querySelectorAll(".formData"),
    checkbox1: document.getElementById('checkbox1'),
    submitBtn: document.getElementById('submitBtn'),
}

//confirmation panel elements

const confirmationPanel = {
    formPanel: document.getElementById('formPanel'),
    box: document.querySelector('.confirmationBox'),
    clos: document.querySelector('.confirmationCloseButton'),
}

const formField = {
    firstName: document.getElementById('first'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email'),
    birthdate: document.getElementById('birthdate'),
    quantity: document.getElementById('quantity'),
}

//error messages

const errorNode = {
    all: document.querySelectorAll(".errorMessage"),
    firstName: document.getElementById('firstNameError'),
    lastName: document.getElementById('lastNameError'),
    birthDate: document.getElementById('birthDateError'),
    email: document.getElementById('emailError'),
    quantity: document.getElementById('quantityError'),
    location: document.getElementById('locationError'),
    conditions: document.getElementById('conditionsError'),
}