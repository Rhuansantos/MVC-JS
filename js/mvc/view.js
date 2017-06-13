export class View {
	constructor(){
	}
	
	// print profile
	static printStudentProfile(_obj){

		_obj.forEach(function(el, i) {
			let studentProfile = `
				 <h4>Name: ${el.name}</h4>
				 <h4>Age: ${el.age}</h4>
				 <h4>Avg Grades: ${el.averge}</h4>
				 <hr/>
			`;
		document.getElementById('studentProfile').insertAdjacentHTML('beforeend', studentProfile);


		});
	}

	static printProfessorProfile(_obj){
		_obj.forEach(function(el, i) {		
			let professorProfile = `
				 <h4>Name: ${el.professorName}</h4>
				 <h4>Age: ${el.className}</h4>
				 <hr/>
			`;
		document.getElementById('professorProfile').insertAdjacentHTML('beforeend', professorProfile);
		});
		document.getElementById('addStudent').style.display = "block";
	}
}