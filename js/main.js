import {App} from './App';

window.addEventListener("load", () => {
	document.getElementById('form').addEventListener('submit', (e) => {
		e.preventDefault();
		let myApp = App.getInstance();
	});
});