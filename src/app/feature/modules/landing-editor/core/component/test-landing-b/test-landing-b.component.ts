import { Component, Injector, OnInit } from '@angular/core';
import { LandingTemplateBase } from '../../landing-template-base';
import { ControlBuilderService } from '../../services/control-builder.service';

@Component({
  selector: 'app-test-landing-b',
  templateUrl: './test-landing-b.component.html',
  styleUrls: ['./test-landing-b.component.scss'],
  providers:[ControlBuilderService]
})
export class TestLandingBComponent extends LandingTemplateBase implements OnInit {
  
  constructor(injector:Injector) {
    super(injector);
  }
  
  ngOnInit(): void {
  }
  
  buildControls(builder: ControlBuilderService) {
    builder.addDataService(this.dataService);
    builder.addCardSection('cardSection1');
  }
}
