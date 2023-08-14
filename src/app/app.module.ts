import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPyscriptComponent } from './add-pyscript/add-pyscript.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoordinatesComponent } from './examples/coordinates/coordinates.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CoordinatesExtendedComponent } from './examples/coordinates-extended/coordinates-extended.component';
import { HttpClientModule } from '@angular/common/http'; // Importieren Sie HttpClientModule
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AddPyscriptComponent,
    CoordinatesComponent,
    CoordinatesExtendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
