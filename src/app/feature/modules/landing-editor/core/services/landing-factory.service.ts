import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { TestLandingComponent } from '../component/test-landing/test-landing.component';
import { LandingTemplateBase } from '../landing-template-base';
import { TestLandingBComponent } from '../component/test-landing-b/test-landing-b.component';

@Injectable({
  providedIn: 'root'
})
export class LandingFactoryService {
  private ref?:ComponentRef<unknown>;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createComponent(componentType: string, controlContainerRef:ViewContainerRef, previewContainerRef: ViewContainerRef) {
    let component: any;

    switch (componentType) {
      case 'TypeA':
        component = TestLandingComponent;
        break;
      case 'TypeB':
        component = TestLandingBComponent;
        break;
      default:
        throw new Error(`Component type ${componentType} is not supported.`);
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = previewContainerRef.createComponent(componentFactory);
    (componentRef.instance as LandingTemplateBase).render(controlContainerRef);
    this.ref = componentRef;
  }

  resetComponent(){
    (this.ref.instance as LandingTemplateBase).destroy();
    this.ref.destroy();
    this.ref = undefined;
  }
}
