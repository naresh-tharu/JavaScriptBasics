// Object class 
let product = [
    "iPhone 12",
    "apple",
    15, 
    10,
    120000
]

let product_1 = {
    name: "iPhone 12",
    brand: "apple",
    stock: 15, 
    discount: 10,
    price: 120000,
    tags: ["electronics",'mobile phones']
}

let keys = Object.keys(product_1); // []
let values = Object.values(product_1);

console.log(keys);


let after_discount = product['price'] - product['price'] * product.discount / 100;
product_1.after_discount = after_discount;

// delete product_1.tags


let categories = [];
let cat1 = {
    title: "Electronics",
    status: "active"
}

categories.push(cat1);  // [{}]


// // price - price * dicsount / 100 => after Discount
// after_discount = product[4] - product[4] * product[2] / 100;
// // stock 
// product[3] = product[3] - 1;