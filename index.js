const inputGroups = document.querySelectorAll('.input-group')
const form = document.querySelector('form')
const formSubmit = document.querySelector('input[type="submit"]')

const inputName = document.getElementById('name')
const inputUsername = document.getElementById('username')
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')
const inputConfirmPassword = document.getElementById('confirmPassword')

const formData = {
	name: '',
	username: '',
	email: '',
	password: '',
}

for (const inputGroup of inputGroups) {
	const label = inputGroup.querySelector('label')
	const input = inputGroup.querySelector('input')

	// Focus on the input when the label is clicked
	label.addEventListener('click', () => {
		input.focus()
	})
}

form.addEventListener('focusout', (event) => {
	const { name, value } = event.target

	/* if name of input is either name, username, email, or passsword
       then store the value in formData*/
	if (formData[name] != undefined) {
		if (name === 'name') {
			// Allow "name" to have spaces
			formData[name] = value
		} else {
			formData[name] = value.trim()
		}
	}

	if (isFormValid()) {
		formSubmit.disabled = false
	} else {
		formSubmit.disabled = true
	}
})

form.addEventListener('submit', (event) => {
	event.preventDefault()

	if (!isFormValid()) return

	const registrationData = {
		name: formData.name,
		username: formData.username,
		email: formData.email,
		password: formData.password,
	}

	console.log(registrationData)
})

function isFormValid() {
	const name = formData.name
	const username = formData.username
	const email = formData.email
	const password = formData.password
	const confirmPassword = inputConfirmPassword.value

	if (name.trim() === '' || !inputName.checkValidity()) return false
	if (username.trim() === '' || !inputUsername.checkValidity()) return false
	if (email.trim() === '' || !inputEmail.checkValidity()) return false
	if (password.trim() === '' || !inputPassword.checkValidity()) return false
	if (confirmPassword.trim() === '') return false

	if (password !== confirmPassword) {
		inputConfirmPassword.setCustomValidity('Passwords do not match')
		return false
	} else {
		inputConfirmPassword.setCustomValidity('')
	}
	if (password.length < 8) return false

	return true
}
