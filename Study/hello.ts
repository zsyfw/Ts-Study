/*---------------------------------------------- 类型定义------------------------------------------------------------------------- */
let age:number = 20       //使用let定义的变量可以重新赋值
const age_const: number = 20     //使用const赋值的变量不可重新赋值,并且必须给予他一个初始值

const str:'hello' = 'hello'  //可以用字符串，数字等作为类型
const num: 18 = 18           //用字符串，数字等作为类型的，称为字面量类型 常用来表示一组明确的可选值列表
//如
function zimiantest(zimian:'up'|'down'|'left'|'right'){    //字面量+联合类型

}
zimiantest("up")//在贪吃蛇游戏中，只能选择上下左右的输入
/*--------------------------------------------数组-----------------------------------------------------------------*/
let arr:number[] = [1,2,3,4]
let arr_str:(number | string)[] = [1,'a',2,'b',3,'b']   //表示这个对象是数组，并且数组中能够出现number和string
let arr2: number | string[] = 123  //表示arr2可以是number类型也可以是字符数组
arr2 = ['a','b','c']

type Number_String = (number | string)[]  //可将常用类型自定义
let arr3:Number_String = [1,'a',2,'b',3,'b'] 
/*------------------------------三种种函数定义方式-------------------------------------------------*/
function add(num1: number , num2: number):number {        
    return num1 + num2
}
const add2 = (num1: number,num2: number):number =>{
    return num1 + num2
}
const add3:(num1: number,num2: number) => number = (num1,num2)=>{
    return num1 + num2
}




//console.log(add(1,2))
//console.log(add2(1,2)) 
//console.log(add3(1,2)) 
/*--------------------------------------可选参数(可选参数必须放在参数列表的最后面!!!)-------------------------------------------------------------*/
function hello(name?: string):void {
    console.log('hello'+name)
}
const hello1 = (name?: string):void =>{
    console.log('hello'+name)
}
//hello('朱思颖')
/*-----------------------------------------定义对象--------------------------------------------------------------*/
let duixiang ={x:1,y:2}  

type person1 = {
    name: string
    age: number
    school?:string
    }     //定义接口

interface person extends person1{//接口的继承
     sayhi(name: string):void
    }     //定义接口


let persontpl: person = {      //实现接口
    name:'朱思颖',                       
    age: 20,
    sayhi(name) {console.log('hi'+this.name),console.log('hi'+name)}
}
//persontpl.sayhi('封文') 
/**---------------------------------------------元组--------------------------------------------------- */
let position: [number,number] = [1,2]
/*----------------------------------------------枚举----------------------------------------------------------*/
enum meiju_test{up = 1,down ,left,right}  //数值枚举默认值会根据前一个数递增，
//enum meiju_test{up = '1',down = 1 ,left,right}     //字符串枚举没有递增,字符串后面的第一个元素需要手动添加初始值
function meijufunction (fangxiang:meiju_test):void{
    console.log(fangxiang)
}
//meijufunction(meiju_test.down)   
/*------------------------------------------------any类型-不推荐使用---------------------------------------------------------- */
//let obj:any = {x : 0}
//obj.aaa = 1   //会报错但不提示

//let a = 1  //隐式any类型

//function add_any(num1 , num2){}  //隐式any类型函数(无参数类型，无返回值类型)
/*-------------------------------------------typeof方法--------------------------------------------------------------------------------- */
//console.log(typeof("hello"))

let p = {x : 1 , y : 2}

function formatPoint(point : typeof p) {console.log("传入的数为:"+"x:"+p.x+"y:"+p.y)}
formatPoint(p)

let typeofTest:typeof p.x = 1 //可以获取对象属性的类型

//let typeofError:typeof add(1,2)//但是无法获取函数返回结果的类型 



