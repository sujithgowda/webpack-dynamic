import {
  Component, 
  ComponentFactory, 
  NgModule, 
  Injectable, 
  ModuleWithComponentFactories,
  Compiler
} from '@angular/core';

import { Subject }    from 'rxjs/Subject';
import { CommonModule } from '@angular/common';



const typeMap = {
  
}

function createComponentModule (component: any) {
  @NgModule({
    imports: [CommonModule],
    declarations: [component],
  })
  class RuntimeComponentModule { }

  return RuntimeComponentModule;
}

@Injectable()
export class DynamicLoaderService {
  constructor(protected compiler: Compiler) {}
  
  private resolveCompHelper$ = new Subject<any>();
  private cache = new Map<string, ComponentFactory<any> | number>();
  
  public createComponentFactory(moduleType: any, componentType:any) : Promise<ComponentFactory<any>> {        

    return new Promise((resolve) => {
      
      this.compiler.compileModuleAndAllComponentsAsync(moduleType)
        .then((moduleWithFactories: ModuleWithComponentFactories<any>) =>  {
            let factory = moduleWithFactories.componentFactories.find(x => x.componentType === componentType);           
            this.resolveCompHelper$.next({ componentType, factory});
            resolve(factory);
        });
    });
  }
}