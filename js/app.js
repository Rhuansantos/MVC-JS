import {Controller} from './mvc/controller';

export class App{
	constructor(){
		this.create();
	}
	static getInstance(){
		if(!App._instance){
			App._instance = new App();
			return App._instance;
		}
		else{
			throw 'App was already created';
		}
	}

	create(){
		const studentName = document.getElementById('studentName').value;
		const studentAge = document.getElementById('studentAge').value;
		const grades = document.getElementById('grades').value;

		const controller = new Controller(studentName, studentAge, grades);
	}
}