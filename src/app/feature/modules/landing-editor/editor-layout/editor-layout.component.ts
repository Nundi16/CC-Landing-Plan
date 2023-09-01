import {
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
export class EditorLayoutComponent implements OnInit {

  @ViewChild('editor', { read: ViewContainerRef, static: true })
  editor: ViewContainerRef;

  @ViewChild('preview', { read: ViewContainerRef, static: true })
  preview: ViewContainerRef;

  private _selectedValue: string = 'TypeA'
  private previewComponent: ComponentRef<LandingTemplateBase>;

  constructor(private landingFactory: LandingFactoryService) {}
  
  //#region Property
  public get selectedValue():string{
    return this._selectedValue;
  }

  public set selectedValue(val:string){
    this._selectedValue = val;
    this.createComponentType(this.selectedValue);
  };
  //#endregion

  ngOnInit(): void {
    this.createComponentType(this.selectedValue);
  }

  createComponentType(type: string) {

    if (this.previewComponent) {
      this.previewComponent.destroy();
    }

    let componentFactory = this.landingFactory.createComponentFactory(type);

    this.previewComponent = this.preview.createComponent(componentFactory);
    this.previewComponent.instance.renderEditor(this.editor);
    
  }
}
