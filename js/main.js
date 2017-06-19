import {App} from './App';

window.addEventListener("load", () => {

	
	document.getElementById('addStudent').addEventListener('submit', (e) => {
		e.preventDefault();
		let myApp = App.getInstance('student');
	});

	document.getElementById('addProfessor').addEventListener('submit', (e) => {
		e.preventDefault();
		let myApp2 = App.getInstance('professor');
	});
	
});