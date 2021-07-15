import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {NomeComponent} from './nome/nome.component';

import { EmailComponent } from './email/email.component';
import { SenhaComponent } from './senha/senha.component';
import { AnosComponent } from './anos/anos.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponent,
    EmailComponent,
    SenhaComponent,
    AnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
