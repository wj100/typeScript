/**<定义变量>
 * 任意类型-any 可以赋予任意类型的值
 * 数字-number
 * 字符串-string
 * 布尔-boolean
 * 数组-无
 * 元组-无  来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
 * 枚举-enum  定义数值集合
 * null-null
 * undefined-undefined
 */
let a:any=[1,2,'dgsd']
a=null
const str: string = 'ssss'
const arr1: number[] = [1, 2, 3]
//数组泛型
const arr2: Array<number> = [1, 2, 3] 
//联合类型
const n1: number | string = 'zizizi' 
const n2: number | string = 2333
//元组
const x: [string, number]=['zxzzx',33] 
//枚举  
enum Color {
  blue = '#00ff00',
  red = '#ff00ff'
}
const blue:Color=Color.blue
console.log(blue);




