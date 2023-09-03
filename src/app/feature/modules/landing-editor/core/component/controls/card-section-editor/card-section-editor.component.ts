import { Component, OnInit } from '@angular/core';
import { EditorControlBase } from '../../../editor-control-base';
import { cardSection } from '../../../interfaces/payload';

@Component({
  selector: 'app-card-section-editor',
  templateUrl: './card-section-editor.component.html',
  styleUrls: ['./card-section-editor.component.scss']
})
export class CardSectionEditorComponent extends EditorControlBase<cardSection> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    
  }

  addCard(){
    this.data.cards.push({text:"test",title:"Csincsilla",bgColor:"#FF0000"});
  }
}
