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


// Type Alias & Interface
function printCoord(point: {x:number, y:number}){
    console.log("The coordinate's x value is " + point.x)
    console.log("The coordinate's y value is " + point.y)
}

printCoord({x:100, y:100})

// 하지만 객체의 속성이 같다면, 파라미터가 point1, point2, point3 ... 계속해서 중복 코드가 늘어난다.
// 커스텀 타입 정의 가능
type Point = {
    x: number,
    y: number,
}
// 아래처럼 간략하게 개선 가능
function calculateDistance(point1: Point, point2: Point):number{
    const locX = point2.x - point1.x
    const locY = point2.y - point1.x
    return Math.sqrt(locX ** 2 + locY ** 2)
}

// Union 타입 재정의
type ID = number | string
// 아래처럼 개선 가능
function newPrintId(id: ID) { // OR
    if(typeof id === "string"){
        console.log(id.toUpperCase())
    }
    console.log(id)
}