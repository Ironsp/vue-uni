//1.数组初始化
let number = [-1, -2, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* 1.删除元素; 三种方式:
1.1 删除数组末尾元素-pop
1.2 删除数组开头元素-shift
1.3 删除任意位置的元素-splice */

//1.1删除数组末尾元素-pop
let poped = number.pop();
console.log(poped); // 14
console.log(number); // [-1, -2, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//1.2删除数组开头元素-shift
let shifted = number.shift();
console.log(shifted); // -1
console.log(number); // [-2, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//1.3删除任意位置的元素-splice
let spliced = number.splice(5,3);//删除数字索引5开始的3个元素
console.log(spliced);// [3, 4, 5]
console.log(number);// [-2, -3, 0, 1, 2, 6, 7, 8, 9, 10, 11, 12]




