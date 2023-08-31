import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {

  constructor() { }

  public payload: T;

  load(){}

  save(){}
}
