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

/**
 * A general purpose comparator for comparing primitive values.
 */
export const compare: Comparator<string> & Comparator<number> & Comparator<boolean> =
    <T extends string | number | boolean>(a: T, b: T) => {
        if (a < b) {
            return Comparison.before;
        } else if (a === b) {
            return Comparison.equal;
        } else if (a > b) {
            return Comparison.after;
        } else {
            throw new Error("Invalid comparison");
        }
    };

/**
 * Returns a new comparator that gives opposite results to the provided
 * comparator.
 */
export function reverse<T>(comparator: Comparator<T>): Comparator<T> {
    return (a: T, b: T) => {
        switch (comparator(a, b)) {
            case Comparison.before:
                return Comparison.after;
            case Comparison.equal:
                return Comparison.equal;
            case Comparison.after:
                return Comparison.before;
            default:
                throw new Error("Invalid comparison");
        }
    };
}
