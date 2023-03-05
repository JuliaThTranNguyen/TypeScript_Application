"use strict";
var _a;
let sales = 456745241;
let course = 'TypeScript';
let is_published = true;
let student;
let numbers = [1, 2, 3];
let news = [];
let user = [1, 'Julia'];
function render(document) {
    console.log(document);
}
const small = 0;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let mySize = Size.medium + Size.small;
console.log(mySize);
function calculateTAX(income, taxYEAR = 2023) {
    if (taxYEAR < 2023)
        return income * 1.2;
    return income * 1.3;
}
calculateTAX(15000, 2021);
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
employee.name = 'Julia';
let newemployee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
newemployee.name = 'Julia';
function convertKG(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
convertKG(10);
convertKG('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet('hien');
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let customer2 = getCustomer(1);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday);
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map