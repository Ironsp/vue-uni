//1. 创建数组(create array) : tow ways
//1.1 new Array 

let arr = new Array('sunday', 'Tuesday', 'Wednessday');
console.log(arr); //(3) ['sunday', 'Tuesday', 'Wednessday']
console.log(arr.length); //3 

//1.2 使用数组字面量(>好)
/* let arr = ['sunday', 'Tuesday', 'Wednessday'];
console.log(arr); //(3) ['sunday', 'Tuesday', 'Wednessday']
console.log(arr[0]); //sunday
console.log(arr.length); //3  */


//2.访问数组元素(accessing array elements)
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]); //sunday;Tuesday; Wednessday
}


//3.迭代数组
//例题; 求斐波那契数列的前20的数. 已知前两项是1 ,从第三项开始, 每一项都等于前两项的和
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (let i = 3; i < 20; i++) {
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
//迭代数字
for (let i = 1; i < fibonacci.length; i++) {
	console.log(i + ':'+ fibonacci[i]); //输入1到19位数字
}

