import { type } from "os";
import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
//export const countLetters: (str: string) => {[letter: string]: number} = (str: string): {[letter: string]: number} => R.countBy(R.toLower)(stringToArray(str).filter(x => x != ' '));
export const countLetters: (str: string) => {[letter: string]: number} = (str: string): {[letter: string]: number} => 
R.pipe(
    (str: string) => stringToArray(str),
    (arr: string[]) => R.filter((x) => x !== ' ')(arr),
    (arr: string[]) => R.countBy(R.toLower)(arr),
)(str);

/* Question 2 */
const isBracket: (str: string) => boolean = R.includes(R.__, ['(', ')', '[', ']', '{', '}' ]);
const isOpeningBracket: (bracket: string) => boolean = R.includes(R.__, ['(', '[', '{']);
const isMatchBracket: (bracket1: string, bracket2: string) => boolean = (bracket1: string, bracket2: string): boolean =>
    (bracket1 === '(' && bracket2 === ')') || (bracket1 === ')' && bracket2 === '(') ||
    (bracket1 === '{' && bracket2 === '}') || (bracket1 === '}' && bracket2 === '{') ||
    (bracket1 === '[' && bracket2 === ']') || (bracket1 === ']' && bracket2 === '[') ? true : false;
    
const func: (stuck: string[], bracket: string) => string[] = (stuck: string[], bracket: string): string[] => 
    isOpeningBracket(bracket)? R.prepend(bracket, stuck) :
    R.isEmpty(stuck) ? R.prepend(bracket, stuck) :
    isMatchBracket(bracket, stuck[0])? R.tail(stuck) : stuck;

export const isPaired: (str: string) => boolean =  (str: string): boolean =>
R.pipe(
    (str: string) => stringToArray(str),
    (arr: string[]) => arr.filter((x) => isBracket(x)),
    (arr: string[]) => arr.reduce(func, []),
    (arr: string[]) => R.isEmpty(arr)
)(str);

/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence : (tree: WordTree) => string = (tree: WordTree): string => 
    tree.children.reduce((root: string , t: WordTree) => R.concat(root + ' ', treeToSentence(t)), tree.root );
