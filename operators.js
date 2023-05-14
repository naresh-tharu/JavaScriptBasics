/**
 * a. Arithematic Operator 
 *      +, -, *, /, %
 * b. Increment Or Decrement Operator 
 *      ++, --
 * c. Assignment Operator 
 *      =, +=, -=, *=, /=, %=
 * d. String/ Concatination Operator
 *      +, ,
 * e. Comparision Operator 
 *      <, >, <=, >=, ==, !=, ===, !==
 * f. Logical Operator 
 *      &&, || , !
 * g. Conditional Or ternary 
 *      (exp) ? true condidiotn : false condition ;
 * 
 *      true ?? default
 * h. Speard Operator 
 *          ...
 */

let a = 10;

// a = a + 1;
console.log(a++)    // 10    // post assign 
// console.log(a);     // 11
console.log(++a)    // 12   // pre assign

let b = 4; 


let c = a / b;  // 2.5
let d = a % b;  // 2

a = a + 1;
a++
++a 
a += 1

// a = 10
// let a = 10;
a++             // a = 11       
console.log(a)  // 11
++a             // a = 12
console.log(a)  // 12

// a = 12
console.log(a++)    // 12          // prevous value of a will be raised by 1, post assign
console.log(a)      // 13
console.log(++a)    // 14         // prevous value of a will be raised by 1, pre assign 
console.log(a)      // 14
a = a + 1         // prevous value of a will be raised by 1
a += 1

let first = "First";
let last = "Name";

// 

// first = first + " " + last

first += " "+last;

console.log("First text", first);     // First Name


let x = 10;
let y = '10';

// == => value 
 // (x == y)        // true
// (x != y)        // false
// // === value and data type
// (x === y)       // false
// (x !== y)       // true

// (x < y)         //  

// ((x==y) && ( x === y) )   
// true && false => false
// true || false => true
// !true => false 
// !false => true

let data = null;

console.log((data) ? "Hello there" : "EmptyData")

// let gender = data ? data : null;

let gender = data ?? null;

// 
let userData = {
    name: "User Name",
    email: "email@user.com",
    address: "Kathmandu"
}

let adminUser = {
    ...userData,
    role: "admin",
    position: "trainer"
}


let obj = {
    name: "Name value",
    email: "value@gmail.com",
    address: "Kathmandu"
}

let obj_1 = {
    ...obj,
    role: "admin",
    phone: 1231231231
}

let obj_2 = {
    ...obj_1,       // spread
    organization: "Broadway"
}

// object destructure 
// key: value
// let {key} =  obj

let {name, email, ...other} = obj_1;
console.log(name)
console.log(email)
console.log(other)

// let name = obj_1.name;

// let email = obj_1.email;
// let other = {
//     address: obj_1.address,
//     role: obj_1.role, 
//     phone: obj_1.phone
// }

let user = {
    name: "",
    email: "",
    password: "",
    status: "",
    address: "",
    role: "",
    fbID: '',
    address_temp: "",
    address_perm: "" 
}
// users, info 
/// {name, email, ...info} = user;
// let users ={
//     name: user.name,
//     email: user.email,
//     password: "",
//     role: ""
// }

let userForm = {
    email: ""
}

// let userEmail = (userForm.email) ? userForm.email : "User email required";

let userEmail = userForm.email ?? "User email requirred";

let userObj_1 = {
    name: "Key1",
    email: "email@test.com"
}

let admin_1 = {
    ...userObj_1,
    role: "admin",
    status: "active"
}

// let status = admin_1.status;
// // rest => remaining 
// let restVar = {
//     name: admin_1.name, 
//     email: admin_1.email,
//     role: admin_1.rol
// }

let {status} = admin_1