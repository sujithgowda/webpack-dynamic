import {
    Component,
    NgModule,   
    ViewEncapsulation,
    Input,
    Compiler,
    ViewContainerRef,
    SystemJsNgModuleLoader,
    ReflectiveInjector,
    NgModuleFactory,
    ViewChild,
		ComponentFactoryResolver
} from "@angular/core"
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';
import {DynamicLoaderService} from '../dynamicloaderservice';


@Component({  
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {

   @ViewChild('widgetcontainer', {read: ViewContainerRef}) widgetcontainer:any;


    constructor(
        private vcRef    : ViewContainerRef ,
        private compiler : Compiler,
				private compfRef:ComponentFactoryResolver,
				private dynamicLoader:DynamicLoaderService
    ){}

    addDynamicComponent(widgetName:string): void {


		require.ensure(["../accountwidgetmodule/index"], (require)=>{
		
						var ind:any =  require("../accountwidgetmodule/index");	

			var mod:any = require("../accountwidgetmodule/accountwidgetmodule");	
			this.dynamicLoader.createComponentFactory(ind.types["moduleType"], ind.types["componentType"]).then(factory => {
       const compRef = this.widgetcontainer.createComponent(factory);

     // (<any>compRef).instance.model = this.model;

      
    });
		}, "accountwidgetmodule");
		
		
	}

 
}
