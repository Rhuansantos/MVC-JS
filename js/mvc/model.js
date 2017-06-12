import {Util} from '../util';

export class Model {
	constructor(){
		console.log('loading');
	}

	processAvg(_data){

		_data = Util.calculateAvg(_data);
		
		return _data;
	}

	processGrades(_data){
		_data = Util.splitArray(_data);

		return _data;
	}
}