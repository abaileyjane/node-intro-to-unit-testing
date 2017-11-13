const should = require('chai').should();

const fizzbuzzer = require('../fizzBuzzer');

describe('fizzbuzzer', function() {
	it('should replace numbers divisible by 15 with fizzbuzz', function(){
		const normalCases = [
		{a: 15, expected: 'fizz-buzz'},
		{a: 2, expected: 2},
		{a:30, expected: 'fizz-buzz'}
		];
		normalCases.forEach(function(input){
			const returnedValue = fizzbuzzer(input.a);
			returnedValue.should.equal(input.expected);
		})
	})

	it('should replace numbers divisible by 3 with fizz', function(){
		const normalCases = [
		{a: 7, expected: 7},
		{a: 18, expected: 'fizz'},
		{a:6, expected: 'fizz'}
		];
		normalCases.forEach(function(input){
			const returnedValue = fizzbuzzer(input.a);
			returnedValue.should.equal(input.expected);
		})
	})

	it('should replace numbers divisible by 5 with buzz', function(){
		const normalCases = [
		{a: 20, expected: 'buzz'},
		{a: 5, expected: 'buzz'},
		{a:35, expected: 'buzz'}
		];
		normalCases.forEach(function(input){
			const returnedValue = fizzbuzzer(input.a);
			returnedValue.should.equal(input.expected);
		})
	})

	it('should raise error if input not a number', function(){
		const badInputs = [
		'a',
		'hello',
		'false'];

		badInputs.forEach(function(input) {
			(function(){
				fizzbuzzer(input)}).should.throw(Error);
			});
		})
	})
