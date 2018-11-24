/**
 * The result of a comparison between two ordered values.
 */
export enum Comparison {
    before = -1,
    equal = 0,
    after = 1
}

/**
 * The type of a function that compares two values of type T.
 */
export type Comparator<T> = (a: T, b: T) => Comparison;
