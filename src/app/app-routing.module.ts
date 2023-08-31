import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorLayoutComponent } from './feature/modules/landing-editor/editor-layout/editor-layout.component';


const routes: Routes = [{path:'**',component:EditorLayoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
