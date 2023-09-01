import { Injectable } from '@angular/core';
import { payload } from '../interfaces/payload';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  public payload: payload;

  public load(){
    this.payload = {
      header: "Teszt Cím",
      article: "Ez egy teszt cikk.",
      cardSection1: {
        title: 'Card section title',
        cards: [
          {
            title: "Kártya 1",
            text: "Ez egy teszt kártya 1."
          },
          {
            title: "Kártya 2",
            text: "Ez egy teszt kártya 2."
          }
        ]
      }
    }
  };

  public save(){};
}
