// getting = controller
// loading = model
// complete = view

import {Model} from './mvc/model';
import {View} from './mvc/view';
import {Student, Professor as Obj} from './classRoom';

export class CustonEvents extends Event{
      constructor(_e){
            super(_e);
      }

      static reading(){
            // let _instance = _arg[0];

            // creating event
            let getEvent = new Event('reading');
            document.dispatchEvent(getEvent);

            let stats = null;
            try {
                  // creating new Instance
                  let _instance = new Obj();

                  stats = 'Done';
                  return {
                        getEvent,
                        _instance, 
                        stats
                  }
            } catch (error) {
                  stats = 'Failed';
                  throw 'this is not a valid class ' + stats + '';
            }

      }
      static loading(){

      }
      static complete(_e){
           
      }
}