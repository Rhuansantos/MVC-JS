import {CustonEvents} from '.././events';
import {View} from './view';
import {Student, Professor} from '.././classRoom';

export class Controller {
	constructor(_type, _name, _className, _age, _grades){
		this.name = _name;
		this.age = _age;
		this.className = _className;
		this.grades = _grades;
		
		let evt = CustonEvents.load();
		if(_type == 'professor'){
			document.addEventListener('load', this.professor());
		}
		else if(_type == 'student'){
			document.addEventListener('load', this.student());
		}
		else{
			throw 'this is not a valid option';
		}

		document.dispatchEvent(evt);
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
		let print = View.printProfessorProfile(professorArray);
		
		// let evtComplete = CustonEvents.complete();
		// document.addEventListener('complete', this.evtDetails);
		// document.dispatchEvent(evtComplete);


		// let professorView = EventHandle.complete(professorArray);
		// document.addEventListener(EventHandle.EvtComplete, EventHandle.complete());
	}

	evtDetails(_e){
		console.log('this event', _e);
	}
}