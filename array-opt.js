let products = []

// typeof products;    // object 

// size of an array 
let size = products.length; 
// console.log(size);      // 0

// Insert 
// insert at last 
let product_1 = ["iPhone 12", "Apple", 123000, 10, "Oliz store"]

// console.log(products);
products.push(product_1);   // 0 index
// console.log(products.length);
product_1 = ["iPhone 13", "Apple", 133000, 10, "Neo store"]

// 0 , 1
products.unshift(product_1) // 0 => 1, new => 0

// 0, 1 
size = products.length; // 2
// 2 
products[3] = product_1;    // 0, 1, 2, 3
console.warn(products);

// Exercise: create an array to collect information about studet
// The student information should contain: Name, email, address, phone

let all_students = [];      // 
let first_std = ["Student Name", "student@one.com", "Kathmandu", 1231231231]
all_students.push(first_std); // 0
let second_std = ["Studnet One", "one@student.com", "Lalitpur", 9876543210]
all_students.unshift(second_std);   // 0, 1
let third_std = ["Student Two", "two@student.com", "Bhaktapur", 8796543210]
all_students[all_students.length] = third_std;

all_students.unshift(third_std);
console.log(all_students);

// delete all_students[0]
let index = all_students.splice(0,1);
console.log("");
// retrive 
// let first_elem = all_students.shift()   // 0 index 
// let last_elem = all_students.pop()      // n-1 index 
//let index = all_students.splice(2, 2);
// let index = all_students.slice(2,3);
// console.log(first_elem);
console.log(all_students);


// file upload image upload 
// validation image 
// type , .jpg, jpeg, png, gif, svg, bmp, webp, psd, tif Raw

let allowed = ["jpg", "jpeg", "png", "gif", "svg", "bmp", "webp"];

let filename = "f.i.l.e.n.a.m.e.jPg";
let splits = filename.split(".");  //
let ext = splits.pop(); // JPG
//let ext = splits[splits.length -1];

allowed.includes(ext.toLowerCase());  // boolean

// ext.indexOf
console.log(ext)


// callback functions
// .map
// .filter
// .forEach

// .reduce