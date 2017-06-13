export class Util{
	constructor(){
	}
	static calculateAvg(_n){
		let total = 0;
		let avg = 0;
		_n.forEach(_el => {
			let toNumber = parseInt(_el);
			total += toNumber;
			avg = total/_n.length;
		});

		return Math.round(avg);
	}

	static splitArray(_n){

		try {
			let sliptArray = _n.split(',');

			return sliptArray;

		} catch (error) {
			throw 'You should use an array of numbers for that function';
		}


	}
}