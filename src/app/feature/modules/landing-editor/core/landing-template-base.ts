
import { ControlBuilderService } from './services/control-builder.service';
import { ViewContainerRef } from '@angular/core';
import { ServiceLocatorService } from './services/service-locator.service';


export class LandingTemplateBase{
    private builder: ControlBuilderService;
    protected buildControls(builder: ControlBuilderService){};

    constructor() {
        this.builder = ServiceLocatorService.injector.get(ControlBuilderService);
        this.buildControls(this.builder);
    }

    public render(controlContainer:ViewContainerRef){
        this.builder.buildComponents(controlContainer);
    }

    public destroy(){
        this.builder.destroyComponents();
    }
}