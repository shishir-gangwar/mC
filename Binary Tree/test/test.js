var assert = require('assert');
var script = require('../index.js')

describe('test cases', () => {
	it('check for no errors', () => {
		script.global.init("(A B)(A C)(B G)(C H)(E F)(B D)(C E)")
		assert.equal(script.global.E1 || script.global.E2 || script.global.E3 || script.global.E4 || script.global.E5,false)
	})
	it('more than two children', () => {
		script.global.init("(A B)(A C)(A D)")
		assert.equal(script.global.E1,true)
	})
	it('Duplicate Tuples', () => {
		script.global.init("(A B)(A B) ")
		assert.equal(script.global.E2,true)
	})
	it('Cycle present', () => {
		script.global.init("(A B)(B C)(C A)")
		assert.equal(script.global.E3,true)
	})
	it('Multiple roots', () => {
		script.global.init("(A B)(C D)")
		assert.equal(script.global.E4,true)
	})
	it('Multiple parents', () => {
		script.global.init("(A B)(B C)(A C)")
		assert.equal(script.global.E5,true)
	})
})