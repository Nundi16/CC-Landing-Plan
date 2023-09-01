import { Component, Input, OnInit } from '@angular/core';
import { cardSection } from '../../../interfaces/payload';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  @Input()
  payload: cardSection

  constructor() { }

  ngOnInit(): void {
  }

}
