/**
 * readonly
 * 可以声明更加严谨的可读属性，亦或者变量。
 */
interface A {
  readonly name: string;
  age: number;
}

const a0:A={
    name:'wj',
    age:33
}
a0.name='' // 对readonly属性修改会报错


/**
 * 条件类型
 * 通过传入类型决定结果
 */
type B<T>= T extends string ? '1':'2'
const a:B<string>='1'
const b:B<number>='1'

