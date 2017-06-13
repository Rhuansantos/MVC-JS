import {Model} from './model';
import {View} from './view';
import {Student, Professor} from '.././classRoom';

export class Controller {
	constructor(_type, _name, _className, _age, _grades){
		this.name = _name;
		this.age = _age;
		this.className = _className;
		this.grades = _grades;
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
		let print = View.printStudentProfile(studentsArray);
	}

	Professor(){
		
		// Professo obj
		let professor = new Professor();
		professor.className = this.name;
		professor.professorName = this.className;

		//init array
		let professorArray = []
		// push obj into array
		professorArray.push(professor);

		let print = View.printProfessorProfile(professorArray);
	}
}