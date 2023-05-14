let carts = [
    {
        id: 1,
        product: "Product One",
        qty: 1,
        price: 1000
    },
    {
        id: 2,
        product: "Product two",
        qty: 1,
        price: 1000
    },
]

let new_item = {
    id: 1,
    prodct: "Test Product",
    qty: 2,
    price: 1000
}

let foundItem = null;
for(let prod of carts) {
    if(prod.id === new_item.id){
        foundItem = prod;
    }
}
console.log({foundItem})
// for(let i =0; i <carts.length; i++){
//     if(carts[i].id === new_item.id){
//         foundItem = carts[i];
//     }
// }

let index = null;
for(let i in carts){
    if(carts[i].id === new_item.id) {
        index = i;
        // foundItem = i
        // value 
        
    }
}
// {var} => {var: value}

console.log({index})    // {index: null or any number}
// for(let i = 0; i < carts.length; i++){
//     if(carts[i].id === new_item.id) {
//         index = i;
//     }
// }
