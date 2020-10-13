import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './components/mon-premier/mon-premier.component';
import { AppareilComponent } from './components/appareil/appareil.component';

import {FormsModule} from '@angular/forms';
import { PostComponentComponent } from './components/post-component/post-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PostComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
