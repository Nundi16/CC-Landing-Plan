import { Component, EventEmitter, Input, Output } from "@angular/core";
import { dataAccessor } from "./interfaces/data-accessor";

@Component({
    template:''
})
export abstract class EditorControlBase<T>{
    private _data:T;
    @Output()
    private dataChange = new EventEmitter<T>();

    public id: number;
    public dataAccessor: dataAccessor<T>;

    public get data(): T {
        if(this.dataAccessor){
            return this.dataAccessor.get();
        }else{
            return this._data;
        }
    }
    @Input()
    public set data(val: T) {
        if(this.dataAccessor){
            this.dataAccessor.set(val);
        }else{
            this._data = val;
            this.dataChange.emit(val);
        }
    }
}