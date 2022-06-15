/**
 * 如果确定某个类型 可以使用下面两种方式将其断言成更具体的类型
 * 不能滥用  会导致类型混乱
 * 也可断言成any
 */
const img: HTMLImageElement = document.getElementById('img') as HTMLImageElement;
const img1: HTMLImageElement = <HTMLImageElement>document.getElementById('img');
