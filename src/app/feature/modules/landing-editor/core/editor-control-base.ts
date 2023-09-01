import { dataAccessor } from "./interfaces/data-accessor";

export abstract class EditorControlBase<T>{
    public id: number;
    public dataAccessor: dataAccessor<T>
}