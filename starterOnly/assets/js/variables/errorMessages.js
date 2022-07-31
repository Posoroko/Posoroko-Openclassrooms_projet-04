import formValidationParams from '../config/formParameters.js'


const errorMessages = {
    nameLength: "Ce champs doit contenir entre 2 et 25 caractères.",
    emailEmpty: "Merci de fournir une adresse email.",
    emailInvalid: "Votre adresse mail n'a pas un format valide",
    birthDateEmpty: "Merci d'indiquer votre age.",
    underaged: "Déso, vous devez avoir au moins " + formValidationParams.minAge + " ans pour vous inscrire.",
    quantityEmpty: "Alors? Combien?",
    quantityTooHigh: "Tu n'exagères pas un peu, là?",
    location: "Dites-nous à quel événement vous voulez participer!",
    conditions: "Vous devez être d'accord avec les conditions d'utilisation."
}

export default errorMessages

