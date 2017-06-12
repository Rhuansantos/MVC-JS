import {Model} from './model';
import {View} from './view';

export class Controller {
	constructor(_name, _age, _grades){
		this.name = _name;
		this.age = _age;
		this.grades = _grades;
		this.create();
	}
	create(){	
		this.model = new Model();
		
		let getGrades = this.model.processGrades(this.grades);
		let getAvg = this.model.processAvg(getGrades);
				
		// print student
		let print = View.printStudentProfile();
	}
}