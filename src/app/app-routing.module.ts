import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGeoComponent } from './main-geo/main-geo.component';
import { MainEngComponent } from './main-eng/main-eng.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: MainGeoComponent,
  },
  {
    path: 'eng',
    component: MainEngComponent,
  },
  // wildcard route
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
