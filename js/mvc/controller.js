import {Model} from './model';
import {View} from './view';
import {Student, Professor} from '.././classRoom';

export class Controller {
	constructor(_name, _age, _grades){
		this.name = _name;
		this.age = _age;
		this.grades = _grades;
		this.Student();
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
		student.grades = getAvg;

		let studentsArray = [];
		studentsArray.push(student);

		

		studentsArray.forEach(function(element) {
			console.log(element);
		}, this);
				
		// print student
		let print = View.printStudentProfile(studentsArray);
	}

	Professor(){

		// Professo obj
		let professor = new Professor();
		professor.className = '';
		professor.professorName = '';
	}
}