console.log("Connected");


const resultField = document.querySelector("#result")
const animation = document.querySelector("#loadingAnimation")
function testing() {
	alert("Clicked");
}

function performAction(event) {
	resultField.classList.add('view')
	event.preventDefault();
	animation.classList.add('loader')
	let text = document.querySelector("#inputField").value;
	fetch("/api", {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ text }),
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
