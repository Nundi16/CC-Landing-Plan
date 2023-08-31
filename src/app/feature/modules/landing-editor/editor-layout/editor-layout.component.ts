import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LandingFactoryService } from '../core/services/landing-factory.service';

@Component({
  selector: 'app-editor-layout',
  templateUrl: './editor-layout.component.html',
  styleUrls: ['./editor-layout.component.scss']
})
export class EditorLayoutComponent implements OnInit {

  selectedValue: string;

  @ViewChild('editor', { read: ViewContainerRef, static: true })
  editor: ViewContainerRef;

  @ViewChild('preview', { read: ViewContainerRef, static: true })
  preview: ViewContainerRef;
  
  constructor(private landingFactory: LandingFactoryService) { }

  ngOnInit(): void {
    this.landingFactory.createComponent('TypeA',this.editor,this.preview)
  }

  onSelectChange(value): void {
    this.landingFactory.resetComponent();
    this.landingFactory.createComponent(value,this.editor,this.preview)
  }

}
