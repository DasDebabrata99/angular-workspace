class ValueHolder<T>{
    value:T;
}
const numberHolder = new ValueHolder<number>();
numberHolder.value = 10;

const stringHolder = new ValueHolder<string>();
stringHolder.value = 'hello'

function valueWrapper<T>(value: T): T[]{
    return [value]
}
let num: number[] = valueWrapper<number>(10); 
