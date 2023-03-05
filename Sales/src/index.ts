let sales = 456_745_241;
let course = 'TypeScript';
let is_published = true;
let student;
let numbers = [1,2,3];
let news: number[] = [];
let user: [number, string] = [1, 'Julia'];

function render(document: any){
    console.log(document);
}

// New example with enum 
const small = 0;
const medium = 2;
const large = 3;

//Pascal Case
enum Size {small = 1, medium , large }
let mySize: Size = Size.medium + Size.small;
console.log(mySize);


// example for function
function calculateTAX(income: number, taxYEAR = 2023): number{
    if (taxYEAR < 2023)
        return income*1.2;
    return income*1.3;
}

calculateTAX(15_000, 2021);// this will override the given taxYEAR above


// Object example

let employee: {
    readonly id: number;
    name: string,
    retire: (datae: Date) => void
} = {
    id:1 ,
     name:'', 
     retire: (date: Date) => {
        console.log(date);
     }
};
employee.name = 'Julia';


// Type Alias --example fro code reusable method
type Employee = {
    readonly id: number;
    name: string,
    retire: (datae: Date) => void
}

let newemployee: Employee = {
    id:1 ,
     name:'', 
     retire: (date: Date) => {
        console.log(date);
     }
};
newemployee.name = 'Julia';


// Union type --example
function convertKG(weight: number | string) {
    //Narrowing
    if(typeof weight === 'number')
        return weight*2.2;
    else
        return parseInt(weight)*2.2;

}

convertKG(10);
convertKG('10kg');


//example about Intersection types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}



//Literal types  --example
//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity  = 100;

type metric = 'cm ' | 'mm';



// nullable types --example
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else 
        console.log('Hola!');
}

greet('hien');
greet(undefined);
//greet(null); -- to run this with any error , then pls enable the "strictNullCheck in tsconfig.json"



//Optional Chaining --example
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);

 // Or wwe could trty this new methos with the optional property access operator
console.log(customer?.birthday);//  this can only be execute if the object is not null or undefined


let customer2 = getCustomer(1);
//optional property access operator
console.log(customer2?.birthday);
console.log(customer2?.birthday?.getFullYear())

// Optional element access operator
// customer2?.[0]

//optional call
let log: any = null;
log?.('a'); //--this will only run if log is actually referencing in actual function. Otherwaise, we will get undefined.