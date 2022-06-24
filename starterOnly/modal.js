function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

        const modalbg = document.querySelector(".bground");
        const modalBtn = document.querySelectorAll(".modal-btn");
        const formData = document.querySelectorAll(".formData");

//modal element

        const close_span = document.querySelector('.close')
        const btnSubmit_input = document.querySelector('.btn-submit')
        const reserve_form = document.getElementById('reserve')
        const checkbox1_input = document.getElementById('checkbox1')
        const submitBtn_input = document.getElementById('submitBtn')

//error message 
        const conditionsError_p = document.getElementById('conditionsError')
        const locationError_p = document.getElementById('locationError')

//confirmation panel elements

        const formPanel_div = document.getElementById('formPanel')
        const confirmationBox_div = document.querySelector('.confirmationBox')
        const confirmationCloseButton_btn = document.querySelector('.confirmationCloseButton')

// launch modal event
        modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// open - close  modal
        function launchModal() {
          modalbg.style.display = "block";
        }

        close_span.addEventListener('click', () => {
          modalbg.style.display = "none";
          reserve_form.reset()
        })

// confirmation panel
        
        confirmationCloseButton_btn.addEventListener('click', () => {
          modalbg.style.display = "none";
          reserve.style.display = "block";
          confirmationBox_div.style.display = "none";
        })


//submit form

submitBtn.addEventListener('click', () => {
    if (!checkbox1_input.checked) {
        conditionsError_p.style.display = "block";
    } else {
        conditionsError_p.style.display = "none";
    }
    if(!reserve_form.location.value) {
        locationError_p.style.display = "block";
    } else {
        locationError_p.style.display = "none";
    }
})

const validate = (e) => {  
  e.preventDefault()

  //simulate form submission
  console.log("Form submitted to server. Thank you!")
  reserve_form.reset()

  //switch to confirmation panel
  reserve.style.display = "none";
  confirmationBox_div.style.display = "grid";
}
