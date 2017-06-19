import {CustonEvents} from '.././events';
import {View} from './view';

export class Controller {
	constructor(_type, _name, _className, _age, _grades){
		this.name = _name;
		this.age = _age;
		this.className = _className;
		this.grades = _grades;
		// this.eventHandle = new EventHandle();
		if(_type == 'professor'){
			this.Professor();
		}
		if(_type == 'student'){
			this.Student();
		}
	}
	 Student(){	
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

	Professor(){

		let professor = CustonEvents.reading('Professor');

		console.log(professor);

		document.addEventListener('reading',  CustonEvents.reading());


		if(professor.stats == 'Done'){
			
			professor._instance.className = this.className;
			professor._instance.professorName = this.name;

			
			//init array
			let professorArray = [];
			// push obj into array
			professorArray.push(professor._instance);

		

			 let print = View.printProfessorProfile(professorArray);
			// let professorView = EventHandle.complete(professorArray);
			// document.addEventListener(EventHandle.EvtComplete, EventHandle.complete());

		}
	}
}