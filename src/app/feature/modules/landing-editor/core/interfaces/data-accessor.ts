export interface dataAccessor<T>{
  set:(T)=>void,
  get:()=>T
}