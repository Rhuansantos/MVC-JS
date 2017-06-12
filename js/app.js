import {Controller} from './mvc/controller';

export class App{
	constructor(){
		// exec this function
		this.sendForm();
	}
	// Singleton
	static getInstance(){
		if(!App._instance){
			App._instance = new App();
			return App._instance;
		}
		else{
			throw 'App was already created';
		}
	}

	sendForm(){
		// form fields
		const studentName = document.getElementById('studentName').value;
		const studentAge = document.getElementById('studentAge').value;
		const grades = document.getElementById('grades').value;

		// instance
		const controller = new Controller(studentName, studentAge, grades);
	}
}