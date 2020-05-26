class Product {
	constructor(name,volume,location) {
		this.name = name
		this.volume = volume
		this.location = location
	}
}
class Order {
	constructor(products,location) {
		this.products = products
		this.location = location
	}
	calcDist(l1,l2) {
		return Math.sqrt(l1[0]*l2[0]+l1[1]*l2[1])
	}
	rateCard(product) {
		let dist = this.calcDist(product.location,this.location)
	//	console.log("dist="+dist)
		if(dist<6)	return 0
		if(dist<11) return 6*dist
		return 12*dist
	}
	packaging(product) {
		return product.volume
	}
	calculatePrice() {
		let newList = []
		let visited = {}
		this.products.forEach(element => {
			if(visited[element.location] !=true){
	//			console.log(element.location)
				visited[element.location] = true
				newList.push(new Product("M",(this.products
					.filter(x => element.location == x.location)
					.reduce((total,x) => total+x.volume,0)
				),element.location))
			}
		})
		return newList.reduce((total,product) => (this.rateCard(product)+this.packaging(product)+total),0)
	}
}

module.exports.Order = Order
module.exports.Product = Product