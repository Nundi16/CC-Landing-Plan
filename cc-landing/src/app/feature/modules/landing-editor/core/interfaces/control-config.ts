import { EditorControlBase } from "../editor-control-base";

export interface controlConfig{
  type: new () => EditorControlBase,
  ref:any,
  property: string
}