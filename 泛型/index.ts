/**
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 * 个人理解泛型相当于类型的形式参数
 */

interface Lengthwise {
    length: number;
}
/**
 * 定义一个函数接受泛型T（继承自Lengthwise接口）
 * 随后可以在参数和规定函数返回值时使用
 * @param arg
 * @returns 
 */
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity(8);