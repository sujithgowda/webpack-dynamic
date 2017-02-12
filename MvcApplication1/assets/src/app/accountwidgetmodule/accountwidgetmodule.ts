import { NgModule}      from '@angular/core';
import { AccountWidgetComponent }  from './accountwidgetcomponent';

@NgModule({ 
  declarations: [ AccountWidgetComponent ],
  entryComponents: [ AccountWidgetComponent ],
  exports:[AccountWidgetComponent]
})
export  class AccountWidgetModule { 
  
}
