import {Controller} from './mvc/controller';


export class App{
	constructor(_type){
		// exec this function

		this.sendForm(_type);
	}
	// Singleton - allows create 1 professor and many students
	static getInstance(_type){
		if(_type == 'professor'){
			if(!App._instance){
				App._instance = new App();
				App._instance.sendForm(_type);
				return App._instance;
			}
			else{
				throw 'App was already created';
			}
		}
		if(_type == 'student'){		
			App._instance = new App();
			App._instance.sendForm(_type);
		}
	}

	sendForm(_type){
		if(_type == 'professor'){
			const professorName = document.getElementById('professorName').value;
			const classRoonName = document.getElementById('className').value;
			//instance
			const controller = new Controller(_type, professorName, classRoonName, null);
		}
		if(_type == 'student'){
			// form fields
			const studentName = document.getElementById('studentName').value;
			const studentAge = document.getElementById('studentAge').value;
			const grades = document.getElementById('grades').value;
			// instance
			const controller = new Controller(_type, studentName, null, studentAge, grades);
		}
	}
}