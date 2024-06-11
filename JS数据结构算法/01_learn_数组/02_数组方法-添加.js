let number = [0,1,2,3,4,5,6,7,8,9];
//1.添加元素
//1.1数组前插入元素-push
number[number.length] = 10
number.push(11);
number.push(12,13,14);
console.log(number); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
//1.2在数组开头插入元素-unshift
number.unshift(-1,-2,-3);
console.log(number); // [-1, -2, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

