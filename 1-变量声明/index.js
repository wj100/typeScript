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
var a = [1, 2, 'dgsd'];
a = null;
var str = 'ssss';
var arr1 = [1, 2, 3];
//数组泛型
var arr2 = [1, 2, 3];
//联合类型
var n1 = 'zizizi';
var n2 = 2333;
//元组
var x = ['zxzzx', 33];
//枚举  
var Color;
(function (Color) {
    Color["blue"] = "#00ff00";
    Color["red"] = "#ff00ff";
})(Color || (Color = {}));
var blue = Color.blue;
console.log(blue);
