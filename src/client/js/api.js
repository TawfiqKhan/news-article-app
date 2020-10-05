const resultField = document.querySelector("#result")
const animation = document.querySelector("#loadingAnimation")
function testing() {
	alert("Clicked");
}

function performAction(event) {
	let text, url;
	resultField.classList.add('view')
	event.preventDefault();
	animation.classList.add('loader')
	text = document.querySelector("#inputField").value.trim();
	if (!text) return;
	if (Client.validateUrl(text)) {
		url = text;
		text = ''
	}
	console.log(text)
	console.log(url)
	fetch("/api", {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ text, url }),
	})
	.then(res => res.json())
	.then(data => {
		animation.classList.remove('loader')
		resultField.classList.remove('view')
		document.querySelector("#nos").innerHTML = data.sentence_list.length
		document.querySelector("#subjectivity").innerHTML= data.subjectivity
		document.querySelector("#agreement").innerHTML = data.agreement
	})
}

export { performAction };
