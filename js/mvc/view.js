export class View {
	constructor(){
	}
	
	// print profile
	static printStudentProfile(_obj){



		// console.log(studentsArray);

		// _obj.forEach(function(el, i) {

		// 	console.log(el, i);	
		// });
		let studentProfile = `
			<h1>Olá</h1>
		`;

		document.getElementById('studentProfile').insertAdjacentHTML('beforeend', studentProfile);
	}
}