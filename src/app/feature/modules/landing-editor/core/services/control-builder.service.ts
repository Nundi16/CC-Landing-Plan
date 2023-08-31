import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { controlConfig } from '../interfaces/control-config';
import { EditorControlBase } from '../editor-control-base';

@Injectable()
export class ControlBuilderService {
  private globalId = 0;
  private _controls: Array<controlConfig> = new Array<controlConfig>();
  private _controlRefs: Array<ComponentRef<unknown>> = new Array<ComponentRef<unknown>>();

  constructor(private componentFactoryResolver:ComponentFactoryResolver) {

  }

  public addControl(config:controlConfig){
    this._controls.push(config);
  }

  buildComponents(controlContainer: ViewContainerRef){
    for (let i = 0; i < this._controls.length; i++) {
      const config = this._controls[i];

      const dynamicComponentFactory:ComponentFactory<EditorControlBase> = this.componentFactoryResolver.resolveComponentFactory(config.type);
      const dynamicComponentRef = controlContainer.createComponent(dynamicComponentFactory);
      dynamicComponentRef.instance.config = config;
      dynamicComponentRef.instance.Id = this.globalId++;
      
      controlContainer.insert(dynamicComponentRef.hostView);
      this._controlRefs.push(dynamicComponentRef);
    }
  }

  destroyComponents(){
    for (let i = 0; i < this._controlRefs.length; i++) {
      const cRef = this._controlRefs[i];
      cRef.destroy();
    }

    this._controlRefs = new Array<ComponentRef<unknown>>();
    this._controls = new Array<controlConfig>();
  }
}
