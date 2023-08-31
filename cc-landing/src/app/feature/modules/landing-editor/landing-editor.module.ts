import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { TextEditorComponent } from './core/component/controlls/text-editor/text-editor.component';
import { TestLandingComponent } from './core/component/test-landing/test-landing.component';
import { LandingFactoryService } from './core/services/landing-factory.service';
import { ControlBuilderService } from './core/services/control-builder.service';
import { TestLandingBComponent } from './core/component/test-landing-b/test-landing-b.component';



@NgModule({
  providers:[LandingFactoryService,ControlBuilderService],
  declarations: [
    EditorLayoutComponent,
    TextEditorComponent,
    TestLandingComponent,
    TestLandingBComponent],
  imports: [
    CommonModule
  ],
  exports:[EditorLayoutComponent]
})
export class LandingEditorModule { }
