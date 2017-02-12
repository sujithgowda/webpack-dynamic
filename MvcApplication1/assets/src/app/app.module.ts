import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JitCompiler} from '@angular/compiler';
import {Compiler} from '@angular/core';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';

import {
  RouterModule
} from '@angular/router';
import {HomeModule} from './home/home.module';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import {DynamicLoaderService} from './dynamicloaderservice';




import '../styles/styles.scss';
import '../styles/headings.css';




/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent 
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
     RouterModule.forRoot(ROUTES)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS, DynamicLoaderService, {
            provide: Compiler,
            useExisting: JitCompiler
        }
  ]
})
export class AppModule {

  constructor(
   
  ) {}




}
