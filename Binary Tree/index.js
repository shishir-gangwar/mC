E1 = false // More than 2 children
E2 = false // Duplicate Tuples
E3 = false // Cycle present
E4 = false // Multiple roots
E5 = false // Multiple parents

let adj = {}
let nodes = []
let second = {}

let visited = {}
iterateNode = (node) => {
	if(visited[node] == true){
		E3 = true
		return
	}
	visited[node] = true
	if (adj[node] != undefined)
		for(i=0;i<adj[node].length;++i){
			node2 = adj[node][i]
			iterateNode(node2)
		}
	visited[node] = false
}
findCycle = function() {
	nodes.forEach(node => {
		iterateNode(node)
	})
}
init = function(input2) {
	adj = {}
	nodes = []
	second = {}
	visited = {}
	let input = input2.split(')').map(input => input.slice(1)).map(input => input.split(" "))
	input.pop()
	input.forEach( element => {
		if(adj[element[0]] == undefined){
			adj[element[0]] = []
			nodes.push(element[0])
		}
		adj[element[0]].push(element[1])
		if(adj[element[0]].filter(x => x==element[1]).length>1)
			E2 = true
		if(adj[element[0]].length > 2)
			E1 = true
		if(second[element[1]] == undefined)
			second[element[1]] = 0
		second[element[1]]++
		if(second[element[1]]>1)
			E5 = true
	})
	nodes.forEach(element => {
		console.log(element+":"+second[element])
	})
	let root = nodes.reduce((total,node) => total += (second[node] == undefined), 0)
	console.log("roots="+root)
	if(root>1)
		E4 = true
	findCycle()
	// let e1 = document.createElement('h2')
	// let t1 = document.createTextNode("More than 2 children:"+E1.toString())
	// let e2 = document.createElement('h2')
	// let t2 = document.createTextNode("Duplicate Tuples:"+E2.toString())
	// let e3 = document.createElement('h2')
	// let t3 = document.createTextNode("Cycle present:"+E3.toString())
	// let e4 = document.createElement('h2')
	// let t4 = document.createTextNode("Multiple roots:"+E4.toString())
	// let e5 = document.createElement('h2')
	// let t5 = document.createTextNode("Multiple parents:"+E5.toString())
	// e1.appendChild(t1)
	// e2.appendChild(t2)
	// e3.appendChild(t3)
	// e4.appendChild(t4)
	// e5.appendChild(t5)
	// document.body.appendChild(e1)
	// document.body.appendChild(e2)
	// document.body.appendChild(e3)
	// document.body.appendChild(e4)
	// document.body.appendChild(e5)
}
// document.getElementById('post').addEventListener('click', () => {
// 	init(document.getElementById('input').value)
// })


// <!-- I was interviewed for Software Development Engineering (SDE1) role Flipkart.
// Round 1: Machine Coding round: (90 minutes)
// Given a binary tree as a sequence of (parent, child) tuples: (A B)(A C)(B G)(C H)(E F)(B D)(C E) Write a program to find following errors in the tree:
// E1: More than 2 children
// E2: Duplicate Tuples
// E3: Cycle present
// E4: Multiple roots
// E5: Multiple parents -->
try{
	module.exports.global = global
}catch(e) {

}