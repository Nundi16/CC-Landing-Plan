import { dataAccessor } from "./interfaces/data-accessor";

export abstract class EditorControlBase<T>{
    public Id: number;
    public dataAccessor: dataAccessor<T>
}