	//your JS code here. If required.
	let counter = 0
	let body = document.querySelector(".my_body")
	let btn = document.getElementById('incrementBtn')

	let element = document.createElement('p')
	element.textContent = counter
	element.id = "counter"
	body.appendChild(element)
	
	btn.addEventListener('click', ()=>{
		alert(counter)
		counter++
		element.textContent = counter;
	})