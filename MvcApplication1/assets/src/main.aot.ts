/*
 * Angular bootstraping
 */
import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from './app/environment';
import { enableProdMode } from '@angular/core';
import { COMPILER_PROVIDERS } from '@angular/compiler';

enableProdMode();
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowser(COMPILER_PROVIDERS)
    .bootstrapModuleFactory(AppModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
