const _ = require('lodash')

class User{
	constructor(user,email,country){
		this.user = user
		this.email = email
		this.country = country
		this.score = 0
	}
	updateScore(score) {
		this.score = score
	}
}
let usersList = []

document.getElementById('submitUser')
.addEventListener('click', 
	_.debounce(() => 
	{
		let user = document.getElementById('user').value
		let email = document.getElementById('email').value
		let country = document.getElementById('country').value
		let newUser = new User(user,email,country)
		usersList.push(newUser)
		console.log(usersList)
	},1000))

document.getElementById('modify')
.addEventListener('click', 
	_.throttle(() => {
		let user = document.getElementById('changeScore').value
		let newScore = parseInt(document.getElementById('newScore').value)
		console.log(user+newScore)
		let res = usersList.filter(element => element.user == user)
		if(res.length>0)
		res[0].updateScore(newScore)
	},2000))

document.getElementById('getTopK').addEventListener('click', () => {
	let k = parseInt(document.getElementById('k').value)
	console.log(usersList.sort((e1,e2) => e2.score-e1.score).slice(0,k))
})

document.getElementById('getUserList').addEventListener('click', () => {
	let score = document.getElementById('score').value
	console.log(usersList.filter(element => element.score == score))
})

document.getElementById('searchUser').addEventListener('click', () => {
	let user = document.getElementById('user2').value
	let email = document.getElementById('email2').value
	let country = document.getElementById('country2').value
	console.log(user+email+country)
	let users = []
	if(user != "")
		users = usersList.filter(element => element.user == user)
	if(email != "")
		users = usersList.filter(element => element.email == email)
	if(country != "")
		users.filter(element => element.country == country)
	console.log(users)
})

document.getElementById('getUsersSub').addEventListener('click', () => {
	let substr = document.getElementById('substr').value
	console.log(usersList.filter(element => element.user.includes(substr)))
})

document.getElementById('rankRange').addEventListener('click', () => {
	let begin = parseInt(document.getElementById('begin').value)
	let end = parseInt(document.getElementById('end').value)
	visited = {}
	rangeList = []
	usersList.sort((e1,e2) => e2.score-e1.score).forEach(element => {
		if(visited[element.score] == undefined){
			visited[element.score] = true
			rangeList.push(usersList.sort((e1,e2) => e2.score-e1.score).filter(el => el.score == element.score))
		}
	})
	console.log(rangeList.slice(begin-1,end))
})
