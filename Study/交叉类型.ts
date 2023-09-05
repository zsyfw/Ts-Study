interface jiao_cha_1 {name: string}
interface jiao_cha_2 {age: number}

type jiao_cha = jiao_cha_1 & jiao_cha_2        //自定义类型jiao_cha获取了两个接口的所有属性 
                                                //相当于type jiao_cha = {name: string ,age: number}
let obj_2: jiao_cha = {
    name: 'a',
    age: 20
}

/*interface A{
    fn: (value: number) =>string
}                                               //类型不兼容的接口继承会报错
interface B extends A{
    fn: (value: string) =>string
}*/
interface A{
    fn: (value: number) =>string
}                                               
interface B {
    fn: (value: string) =>string
}
type C = A & B   //但可以用交叉类型连接参数不兼容的接口
let c: C = {
    fn(value: number | string){
        return 'aa'
    }
 }





