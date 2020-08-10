	/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
		Find the sum of all the multiples of 3 or 5 below 1000.*/


		//created a function with 3 arguments
function multiplesNatural(multiple_1, multiple_2, natural) {

		//added 2 variables for addition and addition of natural numbers
	let multiplesNatural = 0
	let naturalsArr = []
		
		//loop for iterating over a natural number
	for(let i = 0; i <= natural; i++) {

		//condition for multiples of 3 and 5
		if(i % 3 == 0 || i % 5 == 0) {
			multiplesNatural += i
			naturalsArr.push(i)
		}
	}

	//output to developer console
	console.log(multiplesNatural)
	console.log(naturalsArr)
}

multiplesNatural(3, 5, 1000)
