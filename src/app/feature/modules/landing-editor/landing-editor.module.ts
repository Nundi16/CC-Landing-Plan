import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { TextEditorComponent } from './core/component/controls/text-editor/text-editor.component';
import { TestLandingComponent } from './core/component/test-landing/test-landing.component';
import { TestLandingBComponent } from './core/component/test-landing-b/test-landing-b.component';
import { ServiceLocatorService } from './core/services/service-locator.service';
import { LandingFactoryService } from './core/services/landing-factory.service';
import {FormsModule} from '@angular/forms';
import { CardSectionEditorComponent } from './core/component/controls/card-section-editor/card-section-editor.component'
import {CardSectionComponent} from './core/component/sections/card-section/card-section.component'

@NgModule({
  declarations: [
    EditorLayoutComponent,
    TextEditorComponent,
    TestLandingComponent,
    TestLandingBComponent,
    CardSectionEditorComponent,
    CardSectionComponent
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
