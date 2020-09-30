console.log("Connected");

function testing() {
	alert("Clicked");
}

function performAction(event) {
	event.preventDefault();
	let text = document.querySelector("#inputField").value;
	console.log(text);
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
		console.log(data)
		document.querySelector("#nos").innerHTML = data.sentence_list.length
		document.querySelector("#subjectivity").innerHTML= data.subjectivity
		document.querySelector("#agreement").innerHTML = data.agreement
	})
}

export { performAction };
