let submitButton = document.querySelector("#submit")
let dismissButton = document.querySelector(".dismiss-button")
let myForm = document.querySelector("form")
let successDiv = document.querySelector(".success-message")
// console.log(myForm)

submitButton.addEventListener("click", ()=> {
	event.preventDefault()
	let email = myForm[0]
	toggleError(email)
	let errorCheck = document.querySelector(".error")
	if (errorCheck) {
		if (errorCheck.innerHTML === ""){
			let emailSpan = document.querySelector(".email-span");
			emailSpan.innerHTML = email.value
			toggleSuccess()

		}
	}
})

dismissButton.addEventListener("click", ()=> {
	successDiv.style.display = "none"
})

function toggleSuccess() {
	successDiv.style.display = "flex"
}

function toggleError(input) {
	let errorCheck = document.querySelector(".error")
	if (errorCheck) {
		errorCheck.remove();
	}

	let errorDiv = document.createElement("div");
	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	errorDiv.className = "error"

	if (!input.value) {
		errorDiv.innerHTML = "Email should not be empty !"
		input.style.backgroundColor = "#ffe8e6"
	} else if (!regex.test(input.value)) {
		errorDiv.innerHTML = "Valid email required !"
		input.style.backgroundColor = "#ffe8e6"
	}

	input.insertAdjacentElement("afterend", errorDiv)
}