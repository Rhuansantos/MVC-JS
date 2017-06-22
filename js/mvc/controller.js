import {CustonEvents} from '.././events';
import {View} from './view';
import {Model} from './model';
import {Student, Professor} from '.././classRoom';

export class Controller {
	constructor(_type, _name, _className, _age, _grades){
		this.name = _name;
		this.age = _age;
		this.className = _className;
		this.grades = _grades;
		this.professorArray = [];

		if(_type == 'professor'){
			this.professor();
		}
		else if(_type == 'student'){
			this.student();
		}
		else{
			throw 'this is not a valid option';
		}

	}
	 student(){	

		let evt = CustonEvents.loading();

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

	  professor(_e){

		let evt = CustonEvents.complete(this);

            // creating new Instance
		let professor = new Professor();			
		professor.className = evt._obj.className;
		professor.professorName = evt._obj.name;		
		
		// push obj into array
		evt._obj.professorArray.push(professor);

		document.addEventListener('complete', this.sendView);
		document.dispatchEvent(evt);

	}

	sendView(_e){
		console.log('this event', _e);
		View.printProfessorProfile(_e._obj.professorArray);
	}
}