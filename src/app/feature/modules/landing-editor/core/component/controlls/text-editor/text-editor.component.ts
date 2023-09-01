import { Component, OnInit } from '@angular/core';
import { EditorControlBase } from '../../../editor-control-base';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent extends EditorControlBase<string> implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

  onKeyPress(event:KeyboardEvent){
    const inputValue = (event.target as HTMLInputElement).value;
    this.dataAccessor.set(inputValue);
  }
}
