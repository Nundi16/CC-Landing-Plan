
import { ControlBuilderService } from './services/control-builder.service';
import { Component, Injector, ViewContainerRef } from '@angular/core';

@Component({
    template:'',
    providers:[ControlBuilderService]
})
export class LandingTemplateBase{
    private id = Math.random();
    private builder: ControlBuilderService;
    protected buildControls(builder: ControlBuilderService){};

    constructor(private injector:Injector) {
        this.builder = this.injector.get(ControlBuilderService);
        console.log(this.builder.id + " -> " + this.id);
        this.buildControls(this.builder);
    }
    public renderEditor(controlContainer:ViewContainerRef){
        this.builder.buildComponents(controlContainer);
    }
}