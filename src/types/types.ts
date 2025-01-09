// The primitives (원시 타입)
const str: string = "Hello" // string
const num: number = 10 // number
const bool: boolean = true; // boolean

console.log(str.length) // 5
console.log(str.toUpperCase()) // HELLO

// String, Number, Boolean 은 타입 명시법과 다르니 주의
const wrapperStr = new String(num) // number 타입의 num을 string으로 변경

// Array
// ㅡ배열의 초기화 방법ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
let arrayOfNumbers1:number[]
arrayOfNumbers1 = [5]
arrayOfNumbers1 = [5, 10, 30]
// 최종: [5, 10, 30]
console.log(arrayOfNumbers1[0]) // 5
console.log(arrayOfNumbers1[1]) // 10
console.log(arrayOfNumbers1[2]) // 30
// 같은 역할
let arrayOfNumbers2: Array<number>;
arrayOfNumbers2 = [6]
arrayOfNumbers2 = [6, 8, 20]
console.log(arrayOfNumbers2[2]) // 20

// 해당 타입 요소만 허용되는 배열 = 튜플
// let singleNumberTuple: [number, string, boolean]
// singleNumberTuple = [5, "hello", true]


// 함수의 명시적 타입 선언 (매개변수 / parameter)
function greeter(name: string): string {
    return "Hello, " + name;
}

console.log(greeter("Tom"))


// 객체 타입
const car = {
    color: 'red',
    model: 'Sedan',
    manufacturer: 'Toyota',
}

console.log(car.color)

// 구분자를 , 또는 ; 로 사용할 수 있음
function printOutput(pt: {x: number, y:number}) {
    console.log("The X value is : " + pt.x + "\nThe Y value is : " + pt.y)
}

// 객체의 선택적 속성 지정 방법
// "?"를 붙이면 input이 없을 때 제외한다.
function printName(user: {first:string, last?:string}){
    if (user.last != undefined) {
        console.log("Your First name is " + user.first.toUpperCase())
        console.log("Your Last name is " + user.last.toUpperCase())
    } else {
        console.log("Your name is " + user.first.toLowerCase())
    }
}

printName({first:"Bob",})

// any 타입은 오류를 회피하기 위해 사용하는 임시방편 (오류검사 회피)
let object:any = {x:0}

// 어떤 형태로든 사용이 가능해진다.
object.foo()
object()
object.bar = 100
object = "hello"
const n:number = object


// Union 타입
// SRP 원칙 위배 -> num타입과 str타입 파라미터를 분리해서 처리한다.
function printId(id: number | string) { // OR
    if(typeof id === "string"){
        console.log(id.toUpperCase())
    }
    console.log(id)
}

printId(10)
printId("Hello")
