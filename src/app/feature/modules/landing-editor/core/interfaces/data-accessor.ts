import { EditorControlBase } from "../editor-control-base";

export interface dataAccessor<T>{
  set:(T)=>void,
  get:()=>T
}