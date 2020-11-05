import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PrivatePageComponent } from './common/private-page/private-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { AddmodalComponent } from './common/modal/addmodal/addmodal.component';
import { DeletemodalComponent } from './common/modal/deletemodal/deletemodal.component';
import { UpdatemodalComponent } from './common/modal/updatemodal/updatemodal.component';
import { DetailspageComponent } from './common/detailspage/detailspage.component';
import { LoginGuard } from './login.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrivatePageComponent,
    AddmodalComponent,
    DeletemodalComponent,
    UpdatemodalComponent,
    DetailspageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule
  ],
  entryComponents: [
    AddmodalComponent,
    DeletemodalComponent,
    UpdatemodalComponent
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
