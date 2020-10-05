const resultField = document.querySelector("#result")
const animation = document.querySelector("#loadingAnimation")
const inputField = document.querySelector("#inputField")

function testing() {
	alert("Clicked");
}

function performAction(event) {
	let text, url;
	resultField.classList.add('view')
	event.preventDefault();
	animation.classList.add('loader')
	text = inputField.value.trim();
	console.log(text)
	// if user inputs nothing end function
	if (!text) return;
	//if user inputs an url treat the input as url
	if (Client.validateUrl(text)) {
		url = text;
		text = ''
	}
	fetch("/api", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				text,
				url
			}),
		})
		.then(res => res.json())
		.then(data => {
			if (data.status.msg !== "OK") {
				reset()
				resultField.innerHTML = `<p class="error-message">${data.status.msg}, Please Try Again<p/>`
				inputField.value = ''

			} else {
				reset()
				document.querySelector("#nos").innerHTML = data.sentence_list.length
				document.querySelector("#subjectivity").innerHTML = data.subjectivity
				document.querySelector("#agreement").innerHTML = data.agreement
			}
		})
}

function reset() {
	animation.classList.remove('loader')
	resultField.classList.remove('view')
}

export {
	performAction
};