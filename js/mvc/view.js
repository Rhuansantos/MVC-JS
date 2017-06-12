export class View {
	constructor(){
		this.printStudentProfile();
	}
	
	static printStudentProfile(){
		let studentProfile = `
			<h1>Olá</h1>
		`;

		document.getElementById('studentProfile').insertAdjacentHTML('beforeend', studentProfile);
	}
}