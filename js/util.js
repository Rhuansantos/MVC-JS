export class Util{
	constructor(){
	}
	static calculateAvg(_n){
		let total = 0;
		let avg = 0;
		_n.forEach(_el => {
			let toNumber = parseInt(_el);
			console.log(toNumber);
			total += toNumber;
			avg = total/_n.length;
		});

		return Math.round(avg);
	}

	static splitArray(_n){

		let sliptArray = _n.split(',');

		return sliptArray;
	}
}