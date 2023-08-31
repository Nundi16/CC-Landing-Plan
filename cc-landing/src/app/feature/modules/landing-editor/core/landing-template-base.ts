import { ControlBuilderService } from './services/control-builder.service';
import { ViewContainerRef } from '@angular/core';

export abstract class LandingTemplateBase{

    protected buildControls(builder: ControlBuilderService){};

    constructor(private builder: ControlBuilderService) {
        this.buildControls(this.builder);
    }

    public render(controlContainer:ViewContainerRef){
        this.builder.buildComponents(controlContainer);
    }

    public destroy(){
        this.builder.destroyComponents();
    }
}