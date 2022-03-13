// First Task (Первое задание)
type ConcatType = (firstString: string, secondString: string) => string;

const concat: ConcatType = (firstString, secondString) => firstString + secondString;

console.log(concat('Hello,', ' World!'));

//Second Task (Второе задание)
interface TaskInterface {
    howIDoIt: string;
    someArray: (string | number)[];
    withData?: TaskInterface[];
};

const myHometask: TaskInterface = {
    howIDoIt: 'I Do It Well',
    someArray: ['string one', 'string two', 42],
    withData: [{howIDoIt: 'I Do It Well', someArray: ['string one', 23]}],
};

// Third Task (Третье задание)
interface MyArray<T> {
    [n: number]: T;
    map<U>(cbFn: (currentValue: T) => U): U[];
    reduce<U>(cbFn: (accumulator: U, currentValue: T, index: number, array: T[]) => U, initialValue: U): U;
};

const initialArray: MyArray<number> = [1, 2, 3, 4];
const mappedArray = initialArray.map((i) => i + 1);
const reducedArray = initialArray.reduce((a, b) => a + b, 0);

console.log(initialArray);
console.log(mappedArray);
console.log(reducedArray);