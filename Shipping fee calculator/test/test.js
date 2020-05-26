const assert = require('assert')
const script = require('../index.js')


describe('testing', () => {
	it('example1', () => {
		let products = []
		products.push(new script.Product('p2',25*20*20,[20,5]))
		products.push(new script.Product('p1',10*5*5,[12,5]))
		products.push(new script.Product('p3',20*10*10,[100,5]))
		products.push(new script.Product('p5',25*10*22,[100,5]))
		products.push(new script.Product('p4',50*75*80,[15,78]))
		products.push(new script.Product('p1',10*5*5,[22,50]))

		//console.log(products)

		let order = new script.Order(products,[25,5])
		console.log(order.calculatePrice())
		assert(true)
	})
})