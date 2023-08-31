import { ElementRef } from "@angular/core";
import { controlConfig } from "./interfaces/control-config";

export abstract class EditorControlBase{
    public Id: number;
    public config: controlConfig
}