import {CustonEvents} from '.././events';


import {Student, Professor} from '.././classRoom';

export class Controller {
	constructor(_type, _name, _className, _age, _grades){
		this.name = _name;
		this.age = _age;
		this.className = _className;
		this.grades = _grades;
		// let professor = this.professor();
		// let student = this.student();
		
		// custon event
		this.events = CustonEvents.read();
		if(_type == 'professor'){
			document.addEventListener('loading', this.professor());
		}
		else if(_type == 'student'){
			document.addEventListener('loading', this.student);
		}
		else{
			throw 'this is not a valid option';
		}

		document.dispatchEvent(this.events);
	}
	 student(){	
		// model, get averge
		this.model = new Model();
		let getGrades = this.model.processGrades(this.grades);
		let getAvg = this.model.processAvg(getGrades);

		// Student Obj
		let student = new Student();
		student.name = this.name;
		student.age  = this.age;
		student.averge = getAvg;

		// init array
		let studentsArray = [];
		// push obj into array
		studentsArray.push(student);

		// print student
		let print = View.printStudentProfile(studentsArray); // when complete
	}

	professor(){

            // creating new Instance
		let professor = new Professor();			
		professor.className = this.className;
		professor.professorName = this.name;

		//init array
		let professorArray = [];
		
		// push obj into array
		professorArray.push(professor);

		let evt = CustonEvents.complete(professorArray);

		document.addEventListener('complete', Controller.evtDetails);

		dispatchEvent(evt);

		console.log(evt);
	}

	static evtDetails(_e){
		console.log('this event', _e);
	}
}