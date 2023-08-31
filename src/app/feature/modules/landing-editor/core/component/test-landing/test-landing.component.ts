import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { LandingTemplateBase } from '../../landing-template-base';
import { ControlBuilderService } from '../../services/control-builder.service';
import { TextEditorComponent } from '../controlls/text-editor/text-editor.component';

@Component({
  selector: 'app-test-landing',
  templateUrl: './test-landing.component.html',
  styleUrls: ['./test-landing.component.scss'],
  providers:[ControlBuilderService]
})
export class TestLandingComponent extends LandingTemplateBase implements OnInit,AfterViewInit {
  a:string;
  b:string;

  constructor(injector:Injector) { 
    super(injector);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    console.log(this.a)
  }

  protected buildControls(builder: ControlBuilderService): void {
    builder.addControl({type:TextEditorComponent,ref:this,property:'a'})
    builder.addControl({type:TextEditorComponent,ref:this,property:'b'})

  }

}
