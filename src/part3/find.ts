import { T } from "ramda";
import { Result, makeFailure, makeOk, bind, either } from "../lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}
/* (a) */
export const findResult : <T>(pred: (x: T) => boolean, a: T[]) => Result<T> = <T>(pred: (x: T) => boolean, a: T[]): Result<T> => {
    const result = a.find (pred);
    return result !== undefined ?  makeOk(result) : makeFailure("No element found.");
}

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}
/* (b) */
export const returnSquaredIfFoundEven_v2 : (a: number[]) => Result<number> = (a: number[]): Result<number> => {
    const result: Result<number> = findResult(x => x%2 === 0, a);
    return bind(result, x => makeOk(x*x));
} 

/* (c) */
export const returnSquaredIfFoundEven_v3 : (a: number[]) => number = (a: number[]): number => {
    const result: Result<number> = findResult(x => x%2 === 0, a);
    return either(result, x => x*x, x => -1);
} 