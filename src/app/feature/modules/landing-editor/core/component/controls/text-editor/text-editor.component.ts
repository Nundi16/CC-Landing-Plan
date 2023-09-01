import { Component, OnInit } from '@angular/core';
import { EditorControlBase } from '../../../editor-control-base';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent extends EditorControlBase<string> implements OnInit {

  public get value():string{
    return this.dataAccessor.get();
  };

  public set value(val:string){
    this.dataAccessor.set(val);
  };

  constructor() { 
    super();
  }

  ngOnInit(): void {
    
  }

}
