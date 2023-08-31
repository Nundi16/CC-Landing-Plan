import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, OnDestroy, ViewContainerRef } from '@angular/core';
import { controlConfig } from '../interfaces/control-config';
import { EditorControlBase } from '../editor-control-base';

@Injectable({
  providedIn:"root"
})
export class ControlBuilderService implements OnDestroy {
  private globalId = 0;
  private _controls: Array<controlConfig> = new Array<controlConfig>();
  private _controlRefs: Array<ComponentRef<unknown>> = new Array<ComponentRef<unknown>>();
  public id = Math.random();

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
  ngOnDestroy() {
    this.destroyComponents();
    console.log('ngOnDestroy: cleaning up...');
  }
  destroyComponents(){
    for (let i = 0; i < this._controlRefs.length; i++) {
      const cRef = this._controlRefs[i];
      cRef.destroy();
    }
  }
}
