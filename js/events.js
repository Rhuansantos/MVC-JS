// getting = controller
// loading = model
// complete = view
import {Model} from './mvc/model';
import {View} from './mvc/view';
export class CustonEvents extends Event{
      constructor(_e){
            super(_e);
      }
      static load(_e){
            // creating event
            let loadEvt = new Event('load');
            loadEvt._t = _e;
            return loadEvt;
      }
}