type Add = (a: number, b: number) => number;
type Minus = (a: number, b: number) => number;
type Mutifly = (a: number, b: number) => number;
type Divide = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
const minus: Minus = (a, b) => a - b;
const mutifly: Mutifly = (a, b) => a * b;
const divide: Divide = (a, b) => a / b;

export { add, minus, mutifly, divide };
export type { Add, Minus, Mutifly, Divide };
