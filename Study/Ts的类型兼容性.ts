class point {
    x: number
    y: number

    constructor(x: number , y: number ){
        this.x = x
        this.y = y
    }
}
class point2{
    x: number
    y: number

    constructor(x: number , y: number ){
        this.x = x
        this.y = y
    }
}

const p_test: point = new point2(1,2)        //因为ts是结构化类型系统,所以只检查两个类的结构是否相同

class test1{
    x:number
    y:number

    constructor(x: number , y: number ){
        this.x = x
        this.y = y
    }
}

class test2{
    x:number
    y:number
    z:number

    constructor(x: number , y: number ,z: number){
        this.x = x
        this.y = y
        this.z = z
    }
}
const t_test: test1 = new test2(1,2,3)     //test2可以满足test1的所有属性，所以test2可以满足test1的实例化需求
/*---------------------------------------------接口也适用于这种机制--------------------------------------------------------------------------- */
interface inter_test1{
    x:number
    y:number
}
interface inter_test2{
    x:number
    y:number
}
class class_test3{
    x: number
    y: number
    z: number

    constructor(x: number , y: number , z: number){
        this.x = x
        this.y = y
        this.z = z
    }
}

let inter_test_tepl_1: inter_test1 = {x: 1,y: 2}
let inter_test_tepl_2: inter_test2 = inter_test_tepl_1   //可以将结构兼容的对象直接赋值

console.log(inter_test_tepl_2.x)     //被赋值的对象的属性值会变为赋值的对象的属性值

let class_test3_tepl_3:inter_test2 = new class_test3(1,2,3)    // 如果将属性数量少的类实例化为属性更多的类
console.log(class_test3_tepl_3)                                 //在实例化对象中可以看到更多的属性和值，但无法打印

/**--------------------------------------------------函数参数兼容性----------------------------------------------------------------------- */
type F1 = (a: number) => void     //函数
type F2 = (a: number ,b: number) => void

let f1: F1 = () =>{}
let f2: F2 = () =>{}

f2 = f1     //参数少的可以赋值给参数多的,与类和接口兼容性相反

interface Point3D {x: number, y: number}
interface Point4D {x: number, y: number,z: number}
type F3 = (P: Point3D) => void
type F4 = (P: Point4D) => void
let f3: F3 = () =>{}
let f4: F4 = () =>{}
f4 = f3    //参数少的可以赋值给参数多的,与类和接口兼容性相反