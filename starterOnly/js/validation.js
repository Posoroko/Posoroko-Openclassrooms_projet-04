// minimum and maximum values

//required minimum age to participate
    const minAge = 18

// maximum quantity of previous participations
    const maxQuantity = 99
    
// -------------- //

const fieldValidation = {
    nameLength: (name) => {
        if(name.length > 2 && name.length < 26) {
            return true
        }

    },
    email: (email) => {
        if (!email) {
            return 'empty'
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return "valid"
        }
    },
    birthDate: (fieldValue) => {
        if (!fieldValue) {
            return "empty"
        }
        let today = new Date()
        let birthDate = new Date(fieldValue)
        let age = today.getFullYear() - birthDate.getFullYear()
        let monthDifference = today.getMonth() - birthDate.getMonth()
        if ( monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        if (age < minAge ) {
            return "underaged"
        }
    },
    quantity: (fieldValue) => {
        if (!fieldValue) {
            return "empty"
        }
        if (fieldValue < 0 || fieldValue > maxQuantity ) {
            return "crazy!"
        }
    }
}




const errorMessage = {
    nameLength: "Ce champs doit contenir entre 2 et 25 caractères.",
    emailEmpty: "Merci de fournir une adresse email.",
    emailInvalid: "Votre adresse mail n'a pas un format valide",
    birthDateEmpty: "Merci d'indiquer votre age.",
    underaged: "Déso, vous devez avoir au moins 18 ans pour vous inscrire.",
    quantityEmpty: "Alors? Combien?",
    quantityTooHigh: "Tu n'exagères pa sun peu, là?",
    location: "Dites-nous à quel événement vous voulez participer!",
    conditions: "Vous devez être d'accord avec les conditions d'utilisation."
}

//show error message

const showError = (errorNode, text) => {
    errorNode.textContent = text
    errorNode.style.display = "block";
}

const hideError = (errorNode, text) => {
    
}

//validation on changes

formField.firstName.addEventListener('change', () => {
    if(fieldValidation(formField.firstName.value)) {

    }
})