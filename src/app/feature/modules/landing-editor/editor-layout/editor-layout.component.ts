import {
  AfterViewInit,
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LandingFactoryService } from '../core/services/landing-factory.service';
import { LandingTemplateBase } from '../core/landing-template-base';

@Component({
  selector: 'app-editor-layout',
  templateUrl: './editor-layout.component.html',
  styleUrls: ['./editor-layout.component.scss'],
})
export class EditorLayoutComponent implements OnInit,AfterViewInit {
  selectedValue: string = 'TypeA';
  previewComponent: ComponentRef<LandingTemplateBase>;
  editorComponent: ComponentRef<LandingTemplateBase>;

  @ViewChild('editor', { read: ViewContainerRef, static: true })
  editor: ViewContainerRef;

  @ViewChild('preview', { read: ViewContainerRef, static: true })
  preview: ViewContainerRef;

  constructor(private landingFactory: LandingFactoryService) {}

  ngOnInit(): void {
    this.createComponentType(this.selectedValue)
  }
  ngAfterViewInit(){
    console.log(this.selectedValue)
  }

  onSelectChange(value): void {
    this.createComponentType(this.selectedValue)
  }

  createComponentType(type: string) {
    if (this.previewComponent) {
      this.previewComponent.destroy();
    }
    let componentFactory = this.landingFactory.createComponent(type, this.editor, this.preview);
    this.previewComponent = this.preview.createComponent(componentFactory);
    this.previewComponent.instance.renderEditor(this.editor);
  }
}
