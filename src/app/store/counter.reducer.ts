import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";

export const intialstate=1;
export const countReducer= createReducer(
    intialstate,
    on(increment,(state)=>(state+1)),
    on(decrement,(state)=>(state-1)),
)