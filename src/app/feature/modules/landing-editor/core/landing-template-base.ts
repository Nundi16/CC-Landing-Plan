
import { ControlBuilderService } from './services/control-builder.service';
import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    template:'',
    providers:[ControlBuilderService]
})
export abstract class LandingTemplateBase{

    private id = Math.random();
    private builder: ControlBuilderService;

    public dataService: DataService;

    abstract buildControls(builder: ControlBuilderService);

    constructor(private injector:Injector) {
        this.builder = this.injector.get(ControlBuilderService);
        this.dataService = this.injector.get(DataService);

        console.log(this.builder.id + " -> " + this.id);
        this.buildControls(this.builder);

        this.dataService.load();
    }
    public renderEditor(controlContainer:ViewContainerRef){
        this.builder.buildComponents(controlContainer);
    }
}