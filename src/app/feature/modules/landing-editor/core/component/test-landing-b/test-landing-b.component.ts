import { Component, OnInit } from '@angular/core';
import { LandingTemplateBase } from '../../landing-template-base';
import { ControlBuilderService } from '../../services/control-builder.service';

@Component({
  selector: 'app-test-landing-b',
  templateUrl: './test-landing-b.component.html',
  styleUrls: ['./test-landing-b.component.scss']
})
export class TestLandingBComponent extends LandingTemplateBase implements OnInit {

  constructor(builder:ControlBuilderService) {
    super(builder);
  }

  ngOnInit(): void {
  }

}
