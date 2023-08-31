import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LandingTemplateBase } from '../../landing-template-base';
import { ControlBuilderService } from '../../services/control-builder.service';
import { TextEditorComponent } from '../controlls/text-editor/text-editor.component';

@Component({
  selector: 'app-test-landing',
  templateUrl: './test-landing.component.html',
  styleUrls: ['./test-landing.component.scss']
})
export class TestLandingComponent extends LandingTemplateBase implements OnInit,AfterViewInit {
  a:string;
  b:string;
  

  constructor(builder: ControlBuilderService) { 
    super(builder);
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
