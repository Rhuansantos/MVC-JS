import {View} from './mvc/view';
import {Model} from './mvc/model';
import {Controller} from './mvc/controller';
export class CustonEvents extends Event{
      constructor(_e){
            super(_e);
      }
      static read(_e){
            // creating event
            let readEvt = new Event('reading');
            readEvt._e = _e;

            return readEvt;
      }

      static loading(_e){
            let loadEvt = new Event('loading');
            loadEvt._t = _e;
            
            return loadEvt;
      }

      static complete(_e){
            let completeEvt = new Event('complete');
            completeEvt._obj = _e;
      
            return completeEvt;
      }
}