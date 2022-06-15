/**
 * 接口（interface）用于一系列成员的声明，但不包含实现，接口支持合并（重复声明），也可以继承于另一接口。
 * 
 */

// 扩展 div 类型
interface HTMLDivElement {
    createTurnPage(): string;
}

// 实现轮播函数
HTMLDivElement.prototype.createTurnPage = function () {
    return this; // 不具体写了，直接返回原字符串吧
};

// 使用  先将HTMLElement断言为 div
let loop = (<HTMLDivElement>document.getElementById("xxx"))?.createTurnPage()
console.log(111,loop)