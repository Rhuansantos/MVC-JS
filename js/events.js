import {View} from './mvc/view';import {Model} from './mvc/model';
export class CustonEvents extends Event{
      constructor(_e){
            super(_e);
      }
      static read(_e){
            // creating event
            let readEvt = new Event('reading');
            readEvt._t = _e;
            return readEvt;
      }

      static loading(){

      }

      static complete(_e){
            let completeEvt = new Event('complete');
            completeEvt._Obj = _e;
            
            let print = View.printProfessorProfile(completeEvt._Obj);

            return completeEvt;
            
      }
}