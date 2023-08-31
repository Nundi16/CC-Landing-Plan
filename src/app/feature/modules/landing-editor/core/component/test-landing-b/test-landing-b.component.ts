import { Component, OnInit } from '@angular/core';
import { LandingTemplateBase } from '../../landing-template-base';

@Component({
  selector: 'app-test-landing-b',
  templateUrl: './test-landing-b.component.html',
  styleUrls: ['./test-landing-b.component.scss']
})
export class TestLandingBComponent extends LandingTemplateBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
