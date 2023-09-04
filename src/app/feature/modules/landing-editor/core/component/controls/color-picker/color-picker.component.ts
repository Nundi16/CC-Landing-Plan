import { Component, OnInit } from '@angular/core';
import { EditorControlBase } from '../../../editor-control-base';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent extends EditorControlBase<string> implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
    
  }
}
