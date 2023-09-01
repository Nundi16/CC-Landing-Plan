import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import { EditorControlBase } from '../editor-control-base';
import { DataService } from './data.service';
import { payload, isCardSection } from '../interfaces/payload';
import { CardSectionEditorComponent } from '../component/controls/card-section-editor/card-section-editor.component';

interface controlAny {
  key: keyof payload;
  controlType: new () => EditorControlBase<any>;
}

@Injectable({
  providedIn: 'root',
})
export class ControlBuilderService implements OnDestroy {
  
  private globalId = 0;
  private _controls: Array<controlAny> = new Array<controlAny>();
  private _controlRefs: Array<ComponentRef<unknown>> = new Array<
    ComponentRef<unknown>
  >();
  private _dataService: DataService;
  public id = Math.random();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public addControl(type: new () => EditorControlBase<any>, key: keyof payload) {
    this._controls.push({ controlType: type, key: key });
  }

  public addCardSection(key: keyof payload) {
    if (!isCardSection(this._dataService.payload[key]))
      throw TypeError(`payload[${key}] not ${'cardSection'}`);

    this._controls.push({controlType:CardSectionEditorComponent,key:key})
  }

  public addDataService(dataService: DataService) {
    this._dataService = dataService;
  }

  buildComponents(controlContainer: ViewContainerRef) {
    for (let i = 0; i < this._controls.length; i++) {
      const config = this._controls[i];

      const dynamicComponentFactory: ComponentFactory<EditorControlBase<any>> =
        this.componentFactoryResolver.resolveComponentFactory(
          config.controlType
        );
      const dynamicComponentRef = controlContainer.createComponent(
        dynamicComponentFactory
      );

      dynamicComponentRef.instance.dataAccessor = {
        get: () => {
          return this._dataService.payload[config.key];
        },
        set: (data) => {
          this._dataService.payload[config.key] = data;
        },
      };

      dynamicComponentRef.instance.id = this.globalId++;

      controlContainer.insert(dynamicComponentRef.hostView);
      this._controlRefs.push(dynamicComponentRef);
    }
  }

  ngOnDestroy() {
    this.destroyComponents();
    console.log('ngOnDestroy: cleaning up...');
  }

  destroyComponents() {
    for (let i = 0; i < this._controlRefs.length; i++) {
      const cRef = this._controlRefs[i];
      cRef.destroy();
    }
  }
}
