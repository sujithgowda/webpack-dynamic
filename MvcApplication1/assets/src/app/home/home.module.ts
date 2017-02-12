import {NgGridModule} from 'angular2-grid';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';

@NgModule({
    imports:[NgGridModule],
    declarations:[HomeComponent]
})
export class HomeModule{

}

