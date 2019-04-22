// var a = 2;
// // console.log(a);
// a = 3;
// window.onload = function () {
//     console.log(a);
// }

// 用const申明常量，常量必须初始化
// let a = 0;
// let b = 1;
// let c = 2;

//区块中起作用  局部变量
// var a = 2;
// {
//     let a = 3;
// }
// console.log(a)
//循环中使用   (下面会报错  应该把类型改成var)
// for (let a = 0;a<10;a++){
//     console.log(a);
// }
// console.log(a);

//圆括号的使用   (相当于java  先声明 再赋值)
// var a;
// ({a} = {a:222})
// console.log(a);

//数组解构赋值 根据下标
// var [a,b,c] = [1,2];
// console.log(a);
// console.log(c);

//对象解构赋值   根据属性名
// let {name,pwd} = {pwd:'张三'}
// console.log({name,pwd});

// 字符串的解构
// const [a,b,c,d,e]='zhang';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// undefined和null的区别
// 解构的默认值  undefined相当于什么都没有，b是默认值。
// let [a,b="ls"] = ['zs',undefined];
// console.log(a+b);
// let [a,b="ls"]=['zs',null];
// console.log(a+b);

//对象扩展运算符
// function pojo(... arg0) {
//     console.log(arg0[0]);
//     console.log(arg0[1]);
//     console.log(arg0[2]);
// }
// //调用
// pojo(1,2);

//声明两个数组  数组一的值赋给数组二
// let arr1 = ['z','h','d'];
// // let arr2 = arr1;  //这样arr1的值会改变
// let arr2 = [...arr1];  //建议使用
// console.log(arr1);
// console.log(arr2);
// arr2.push('sr');
// console.log(arr1);
// console.log(arr2);

//es5字符串的拼接
// let zhd = '小张同学';
// let blog = "欢迎"+zhd+"过来";
// document.write(blog)
//es6字符串的拼接
// let zhd = '小张同学';
// let blog = `欢迎${zhd}过来`;
// document.write(blog)

//字符串模板支持对算法的支持
// let a = 1;
// let b = 2;
// let result = `${a+b}`
// window.document.write(result);

//是否包含字符串
// var  a = 'aab';
// var b = 'a';
// //es5写法
// window.document.write(a.indexOf(b)>0);
// //es6写法
// window.document.write(a.includes(b));
//判断开头
// document.write(a.startsWith(b));
// //判断结尾
// document.write(a.endsWith(b));

// 如何判断是否是数字
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('lj'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));


//复制字符串
// console.log('*'.repeat(3));

//数字操作
// //二进制
// var bin = 0B10001;
// console.log(bin);
// //八进制
// var e = 0o123;
// console.log(e);


//Number.isInteger 判断是否为整数
// let a= 911.918
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

//整数的取值范围   超出范围后替换为0
// var val = Math.pow(2,53);
// console.log(val);
// //最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);
// //最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);
// //安全整数判断
// console.log(Number.isSafeInteger(val));

//json  注意length 尽量写上  后面写正确的数量   以便后续操作
// let a = {
//     '0':1,
//     '1':2,
//     '2':3,
//     length:3
// };
// console.log(a);
// //将json串转为数组  key值要是下标0 1 2
// console.log(Array.from(a));

// ES5 判读NaN
// console.log("****************ES5 判读NaN**************")
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('taiji'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2a'));
// console.log("##############ES6 判读NaN###############")
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('taiji'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2a'));

//转换失败  变为NAN  结果为true
// console.log(Number.isNaN(parseInt('ab')))

//Array.of  把字符串，数字转变成数组
// console.log(Array.of(3,4,5,6));

//查询  funcion（‘根据值查询’，‘根据下标查询’，‘数组’）
// let arr = [1,2,3,4,5,6,7,8,8,9];
// console.log(arr.find(function (value,index,arr) {
//     return index > 6;
// }))

//fill('替换变量'，从这个开始，到这个结束（不包括这个）)    左闭右开
// let arr = ['a','b','c','d'];
// console.log(arr);
// arr.fill('d',1,3);
// console.log(arr);

//数组循环
//数组循环  输出内容
// let arr=['zhd','张宏达','按时的'];
// for (let item of arr){
//    console.log(item);
// }

// for…of数组索引
//数组循环   输出索引
// let arr=['zhd','张宏达','按时的'];
// for (let index of arr.keys()){
//    console.log(index);
// }

// for…of数组索引
//数组循环   全都输出
// let arr=['zhd','张宏达','按时的'];
// for (let [index , val] of arr.entries()){
//    console.log(index +'  '+val);
// }

//方法切割数组
// let arr = ['aaa','bbb','ccc'];
// // console.log(arr[1]);
// let list = arr.entries();
// console.log(list.next().value)
// console.log(list.next().value)
// console.log(list.next().value)

//箭头函数   返回值只有一个可以直接写  多个值要写{}
//一些运算
// es5
// function add(a,b=1){
//     // 'use strict'
//     return a+b;
// }
//es6
// var add =  (a,b=1) => a-b;
// console.log(add(1));
// console.log(add.length);  //只计算没赋值的参数

// 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内
// 有严谨模式‘use strict’函数有默认值的时候是不行的，会报错
// function add(a,b){
//     'use strict'
//     return a+b;
// }
// console.log(add.length);
//即严谨模式时 参数列表的个数  等于length

//对象的函数解构
// let json = {
//     a:'阿三',
//     b:'阿萨'
// };
// function f({a,b='web'}) {
//     console.log(a,b);
// }
// f(json);

//数组解构  扩展运算符
// var a = ['sa','qw','aasd'];
// function fun(a,b,c,d) {
//     console.log(a,b,c,d);
// }
// fun(...a);


//in 的用法  json 判断key  是否在json中
// let obj = {
//     a : '张三',
//     b : 'qw'
// };
// console.log('c' in obj);
// console.log('a' in obj);

//数组判断
//长度判断
// let a = [1,2,3,];   //结果为3
// console.log(a.length);  //据说是个坑 记住
// let b = [,2,3,4];   //结果为4
// console.log(b.length);  //据说是个坑 记住

// console.log(0 in a);  //true   下标为0 的参数否有值
// console.log(0 in b);  //false   下标为0 的参数否有值

//数组foreach
// let arr = [
//    'assa',
//    'asd'
// ];
// arr.forEach((value,index) => console.log(value,index));

//数组遍历  filter
// let arr = [
//     'assa',
//     'asd'
// ];
// arr.filter(x => console.log(x));

//数组遍历  some
// let arr = [
//     'assa',
//     'asd'
// ];
// arr.some(x => console.log(x));

// 数组遍历 map替换
// let arr = ['lj','梁娟','太极'];
// console.log(arr.map(x=>'web'));

// 数组转换成字符串
// let arr = ['lj','梁娟','太极'];
// console.log(arr.toString());
// console.log(arr.join('|'));

//对象
//对象赋值
// let a = '张三';
// let b = '老师';
// let obj = {a,b};
// console.log(obj);

//key 值的构建
// let a = 'key';
// let obj = {a:'战争中'};
// console.log(obj);

//自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));

// Object.is( ) 对象比较
// is()
// let obj1={name:'lj'};
// let obj2={name:'lj'};
// console.log(obj1.name===obj2.name);//T
// console.log(Object.is(obj1.name,obj2.name));//T
// // ===同值相等 is严格相等
// console.log(+0===-0);  //T
// console.log(NaN===NaN);//F
// console.log(Object.is(+0,-0));//F
// console.log(Object.is(NaN,NaN));//T

//assign  合并对象
// let a={a:'lj'};
// let b={b:'梁娟'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

// Symbol  ES6新增的
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// let f = Symbol();
// console.log(typeof(f));

//symbol类型
// var sym = Symbol();
// console.log(typeof sym);

//symbol 的打印
// var sym = Symbol('zhd');
// console.log(sym);
// console.log(sym.toString());

// Symbol在对象中的应用
// let lj = Symbol();
// let obj = {
//     [lj]:'zhd'
// }
// console.log(obj[lj]);
// obj[lj]='zhd2'
// console.log(obj[lj]);

//对数据的保护
// var obj = {name:'zhangsan',pwd:'123'};
// let age = Symbol();
// obj[age] = 18;
// console.log(obj);
// //for in 遍历  不会遍历出Symbol类型
// for(var item in obj){
//     console.log(item);
// }
// console.log(obj[age]);//需要自己手动写




//循环输出
//for...of
// for(let item of setArr){
//     console.log(item);
// }
// forEach
// setArr.forEach((value)=>console.log(value));
// size属性  size属性可以获得Set值的数量。
// console.log(setArr.size);

//WeakSet的声明  这块有个坑，如果则会输出两遍obj的值
// let weakObj = new WeakSet();
// let obj={a:'lj',b:'梁娟'};
// let obj1 = obj;
// // let obj1={a:'lj',b:'梁娟'};
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);


//map  效率大于json
// let json={
//     name:'lj',
//     skill:'web'
// };
// console.log(json.name);

//一些基本操作
// var map = new Map();
// map.set('a','1');
// map.set('b','2');
// console.log(map);
// map.delete('a');
// console.log(map);
// var flag = map.has('a');
// console.log(flag);
// map.clear();
// console.log(map);

// proxy代理
// var obj = {
//     add:function (val) {
//         return val+100;
//     },
//     name:'张三'
// }
// console.log(obj.add(2));
// console.log(obj.name);

// var pro = new Proxy(
//     {
//         add:function(val){
//             return val+100
//         },
//         name:'I am lj'
//     },
//     {
//     //get预处理
//         get: function (target, key, property) {
//             console.log('come in Get');
//             return target[key];
//         },
//         set:function(target,key,value,recriver){
//             console.log(` setting ${key} = ${value}`);
//             return target[key] = value+'222';
//         }
//     }
// );
// console.log(pro.name);
// pro.name = 'zhd'
// console.log(pro.name)

// class 类
//类的声明
class Coder {
    name(val) {
        console.log(val);
        return val;
    }
// }

// let lj = new Coder;
// lj.name('梁娟');
    skill(val){
        console.log(this.name('梁娟')+':'+'skill-'+val);
    }
//     // 类的传参
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
    add(){
        return this.a + this.b;
    }
}
let lj = new Coder(1,2);
lj.name('梁娟1');
lj.skill('web');
console.log(lj.add())
