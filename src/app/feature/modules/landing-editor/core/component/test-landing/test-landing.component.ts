import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { LandingTemplateBase } from '../../landing-template-base';
import { ControlBuilderService } from '../../services/control-builder.service';
import { TextEditorComponent } from '../controls/text-editor/text-editor.component';
import { ColorPickerComponent } from '../controls/color-picker/color-picker.component';

@Component({
  selector: 'app-test-landing',
  templateUrl: './test-landing.component.html',
  styleUrls: ['./test-landing.component.scss'],
  providers: [ControlBuilderService],
})
export class TestLandingComponent
  extends LandingTemplateBase
  implements OnInit, AfterViewInit
{
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  buildControls(builder: ControlBuilderService): void {
    
    builder.addControl(TextEditorComponent,"header");
    builder.addControl(TextEditorComponent,"article");
    builder.addControl(ColorPickerComponent, "headerBgColor");

    builder.addDataService(this.dataService);
  }
}
