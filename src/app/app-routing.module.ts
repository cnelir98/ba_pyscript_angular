import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPyscriptComponent } from './add-pyscript/add-pyscript.component';
import { CoordinatesComponent } from './examples/coordinates/coordinates.component';
import { CoordinatesExtendedComponent } from './examples/coordinates-extended/coordinates-extended.component';

const routes: Routes = [
  { path: '', component: AddPyscriptComponent},
  { path: 'coordinates', component: CoordinatesComponent},
  { path: 'coordinatesExtended', component: CoordinatesExtendedComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
