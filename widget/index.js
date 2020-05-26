class Comment{
	constructor(username,text){
		this.username = username
		this.text = text
		this.replyList = []
	}
}

createComment = function(username,text,headElement) {

	let comment = new Comment(username,text)
	let commentsList = JSON.parse(sessionStorage.getItem('commentsList')) || []
	RenderComment(comment,headElement)
	console.log(headElement.parentElement)
	if(headElement.parentElement == document.body){
		commentsList.push(comment)
		sessionStorage.setItem('commentsList',JSON.stringify(commentsList))
	}
	else {
		let username = headElement.innerText.split(':')[0]
		let text = headElement.innerText.split(':')[1]
		commentsList.find(comment => comment.username == username && comment.text == text).replyList.push(comment)
		headElement.remove()
	}
}

RenderComment = function(comment,headElement) {
	let div = document.createElement('div')
	let text = document.createTextNode(comment.username + ":" + comment.text)
	let replyButton = document.createElement('input')
	replyButton.setAttribute('type','button')
	replyButton.setAttribute('id','post')
	replyButton.setAttribute('value','post')
	div.append(text)
	div.append(replyButton)
	addListener(replyButton)
	headElement.append(div)
}

addListener = function(replyButton) {
	replyButton.addEventListener('click', () => {
		let form = generateNewForm()
		replyButton.parentElement.appendChild(form)
	}) 
}

generateNewForm = function() {
	let form = document.createElement('form')
	form.setAttribute('style','display:flex;')
	let el1 = document.createElement('input')
	let el2 = document.createElement('input')
	let button = document.createElement('input')
	el1.setAttribute('id','username')
	el2.setAttribute('id','text')
	button.setAttribute('id','post')
	button.setAttribute('type','button')
	button.setAttribute('value','Reply')
	form.appendChild(el1)
	form.appendChild(el2)
	form.appendChild(button)
	addPostListener(button)
	return form
}

addPostListener = (button) => {
	console.log(button)
	button.addEventListener('click',() => {
		let username = button.parentNode.querySelector('[id="username"]').value
		let text = button.parentNode.querySelector('[id="text"]').value
		createComment(username,text,button.parentElement)
	})
}

renderAllComments = function(commentsList) {
	commentsList.forEach(element => {
		RenderComment(element,document.body)
		element.replyList.forEach(reply => {
			RenderComment(reply,element)
		})
	})
}

addPostListener(document.getElementById('post'))

let commentsList = JSON.parse(sessionStorage.getItem('commentsList')) || []

renderAllComments(commentsList)

