import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {appRouting} from './app.routing';
 // import {SharedModule} from './shared/shared.module';
// import {MdToolbarModule, MdSidenavModule, MdMenuModule, MdInputModule, MdButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    // MdSidenavModule,
    // MdMenuModule,
    // MdInputModule,
    // MdButtonModule,
    // MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
