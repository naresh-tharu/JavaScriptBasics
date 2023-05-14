// Decision Making Statement 
/**
 * a. If-else
 * b. else-if 
 * c. switch-case
 * d. Loop 
 *      i. do-while 
 *      ii. while 
 *      iii. for 
 *      iv. for-in 
 *      v. for-of
 */
// yes, no 
// truthy value 
// falsy value 
    // false, null, 0, "", undefined, empty variables, undeclared variables 
let product = {
    name: "Product Name",
    price: 1000,
    discount: 10
}

// dicount present 
if(product.discount){
    product.after_discount = product.price - product.price * product.discount / 100;
} else {
    // optional
    product.after_discount = product.price;
}

// product price => after discount, original 
// no discount => original 

// nesting 
if(product.discount) {
    console.log("After Discount: ", product.after_discount)
    //console.log("Original: ", product.price)
    // if() {
    //     if() {

    //     }
    // } else {
    //     if() {

    //     } else {}
    // }
} 

console.log("Original: ", product.price)
// else  {
//     console.log("Original: ", product.price)
// } 

// https://github.com/ryanmcdermott/clean-code-javascript#introduction

// Create two variables 
// marks_obt, percentage 
// to calculate percentage based on marks_obt, consider 500 as a total 
// Based on the precentage print: 
// per >= 80 => First Division with Distinction
// per >= 60  < 80 => First Division
// per >= 45  < 60 => Second Division
// per >= 32  < 45 => Third Division
// per < 32 => Sorry! You are failed


// Calculate Total amount of tax to be paid by an employee.
// rules: 
// let us consider the annual income of a person is 1,00,00,000
// Tax bracket: 
// 0-500000 => 1%
// +500000  => 15%
// +700000  => 20%
// +900000  => 30%
// > rem => 35%


// Calculate Electricity bill based on the following: 
// consider total units consumed = 150 units
// for 
// 0-50 => NPR. 80
// for next 20 units => Npr. 5/unit
// for next 30 unit => Npr. 8/unit
// for remaining    => Npr. 10/unit
