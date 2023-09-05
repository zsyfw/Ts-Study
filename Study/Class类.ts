
interface Move{
    move(): void
}

class Person implements Move{
    move(){
        console.log("走两步")
    }

    protected protectedtest(){

    }
    run(){
        this.protectedtest()     //可以在自己的方法和子类中调用protected保护的方法
    }
}
//let protectedtest = new Person()
//protectedtest.protectedtest               //但无法在实例对象中调用

/*------------------------------------------------------readonly用法-------------------------------------------------------------- */
class Student extends Person{
    age: number
    gender: string
    readonly name:string                //只读属性。除了构造函数和初始值，没有方法可以为他赋值
    //readonly test = 18       //并且，如果不给readonly修饰的对象设置类型，他将变成一个字面量类型
    
    constructor(age: number , name: string, gender: string){  // 构造函数不能声明反返回值类型
        super()
        this.age = age
        this.gender = gender
        this.name = name
    }
    setAeg(age: number):void {
        this.age = age
    }
}
/*--------------------------------------------------------------------------------------------------------------------------- */
/*interface Iperson{              //readonly也可以用于接口或用{}表示的对象
    readonly name: string
}

let obj:Iperson = {
    name: 'jack'              //此时obj.name = bob将会报错
}*/

/*let obj: { readonly name: string} = {
    name: 'jack'                      //此时obj.name = bob将会报错
}*/
const student = new Student(20,"封文","男")
console.log(student.age,student.gender)
student.setAeg(22)
console.log(student.name)
student.move()















