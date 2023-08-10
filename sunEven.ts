const sumEven: (numberAsString: string[]) => number = (numberAsString: string[]) : number => 
    numberAsString.map(x => parseInt(x,10)).reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc, 0);
// let arr = ['1','2','3','4','2','8'];
// console.log (sumEven(arr));
// const sumEven: (numbersAsString: string[]) => number =
// (numbersAsString: string[]) =>
// numbersAsString.map((numStr: string) => parseInt(numStr, 10))
// .filter((n: number) => n % 2 === 0)
// .reduce((acc, curr) => acc + curr, 0);

let arr = ['1','2','3','4','5','6','7','2'];
console.log(sumEven(arr));

const a = <T>(x : T[], y : (a: T) => boolean): boolean => x.some(y);
const b = (x: number[]) : number => x.reduce((acc:number, cur: number) => acc + cur,0);
const c = <T>(x: boolean, y: T[]) : T => x ? y[0] : y[1];
const d = <T1, T2, T3>(f: (value: T1) => T2, g: (value: number) => T1) : ((x: number) => T2) =>(x: number) => f(g(x + 1));

console.log(a([1,2,3,4], (n: number) => n % 2 === 0));
console.log(a([1,3,5,7], (n: number) => n % 2 === 0));
console.log(b([1,2,3,4]));
console.log(c(true, [1,2]));
console.log(c(false, [1,2]));
console.log(d(x => typeof(x)==="number"? 1 : 0 , x=>x+1 )(3));

<T>(x : T[], y : (a: T) => boolean): boolean => x.some(y);
(x: number[]) : number => x.reduce((acc:number, cur: number) => acc + cur,0);
<T>(x: boolean, y: T[]) : T => x ? y[0] : y[1];
<T1, T2>(f: (value: T1) => T2, g: (value: number) => T1) : ((x: number) => T2) =>(x: number) => f(g(x + 1));