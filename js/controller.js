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
		console.log(this.name, this.age, this.grades);
	}
}