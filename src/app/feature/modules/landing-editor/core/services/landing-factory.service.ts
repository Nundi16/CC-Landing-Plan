import { ComponentFactory, ComponentFactoryResolver, Injectable } from '@angular/core';
import { TestLandingComponent } from '../component/test-landing/test-landing.component';
import { LandingTemplateBase } from '../landing-template-base';
import { TestLandingBComponent } from '../component/test-landing-b/test-landing-b.component';

@Injectable({
  providedIn: 'root'
})
export class LandingFactoryService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createComponentFactory(componentType: string):ComponentFactory<LandingTemplateBase> {
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
