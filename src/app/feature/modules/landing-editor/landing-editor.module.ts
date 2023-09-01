import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { TextEditorComponent } from './core/component/controlls/text-editor/text-editor.component';
import { TestLandingComponent } from './core/component/test-landing/test-landing.component';
import { TestLandingBComponent } from './core/component/test-landing-b/test-landing-b.component';
import { ServiceLocatorService } from './core/services/service-locator.service';
import { LandingFactoryService } from './core/services/landing-factory.service';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    EditorLayoutComponent,
    TextEditorComponent,
    TestLandingComponent,
    TestLandingBComponent,
  ],
  imports: [CommonModule,FormsModule],
  providers: [LandingFactoryService],
  exports: [EditorLayoutComponent],
})
export class LandingEditorModule {
  constructor(private injector: Injector) {
    ServiceLocatorService.injector = this.injector;
  }
}
