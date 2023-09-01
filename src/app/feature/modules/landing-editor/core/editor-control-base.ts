import { dataAccessor } from "./interfaces/data-accessor";

export abstract class EditorControlBase<T>{
    public id: number;
    public dataAccessor: dataAccessor<T>
    public get data(): T {
        return this.dataAccessor.get();
    }
    public set data(val: T) {
        this.dataAccessor.set(val);
    }
}