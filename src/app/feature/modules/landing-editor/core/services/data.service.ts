import { Injectable } from '@angular/core';
import { payload } from '../interfaces/payload';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  public payload: payload;

  public load(){
    this.payload = {
      header:'Header',
      article:'Ez egy hoszabb szöveg'
    }
  };

  public save(){};
}
