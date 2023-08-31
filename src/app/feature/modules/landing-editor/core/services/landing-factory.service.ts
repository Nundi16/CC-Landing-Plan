import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { TestLandingComponent } from '../component/test-landing/test-landing.component';
import { LandingTemplateBase } from '../landing-template-base';
import { TestLandingBComponent } from '../component/test-landing-b/test-landing-b.component';

@Injectable({
  providedIn: 'root'
})
export class LandingFactoryService {
  private componentRef:ComponentRef<LandingTemplateBase>;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createComponent(componentType: string, controlContainerRef:ViewContainerRef, previewContainerRef: ViewContainerRef):ComponentFactory<LandingTemplateBase> {
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

    return this.componentFactoryResolver.resolveComponentFactory(component);
  }
}
