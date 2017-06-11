import {Controller} from './controller';

export class App{
	constructor(){
		const controller = new Controller('a');
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
}