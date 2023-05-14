let products = [
    {
        name: "Product One",
        price: 1000,
        discount: 10
    },
    {
        name: "Product Two",
        price: 2000,
        discount: 10
    },
    {
        name: "Product Three",
        price: 3000,
        discount: 10
    },
    {
        name: "Product Test",
        price: 5000, 
        discount: 4
    }
]

products.push({
    name: "Product Four",
    price: 4000, 
    discount: 10
})
// 4 0123 45 6

products[6] = {
    name: "Product Five",
    price: 5000, 
    discount: 10
}
// let i = 0;
let size = products.length;
// while 
// while(i < size) {  // 0 1 2
//     products[i].afterDiscount = products[i].price - products[i].price * products[i].discount / 100
//     i++
// }

// do {  // 0 1 2
//     products[i].afterDiscount = products[i].price - products[i].price * products[i].discount / 100
//     i++
// }while(i < size)
let htmlTable = "";
let j = 1;
for(let i in products){

//}
//for(let i = 0; i < size; i++){
    let prod = products[i];
    prod.afterDiscount = prod.price - prod.price * prod.discount / 100   
    // htmlTable += "<tr><td>"+(j++)+"</td><td>Product Name</td><td>Npr. 1000</td><td>10</td><td>900</td></tr>"
    htmlTable += `<tr>
            <td>${j++}</td>
            <td>${prod.name}</td>
            <td>Npr. ${prod.price}</td>
            <td>${prod.discount}</td>
            <td>Npr. ${prod.afterDiscount}</td>
        </tr>`;
    //if(prod){
    
    //}
}

document.getElementById('tbody').innerHTML = htmlTable
// let afterDiscount = products[0].price - products[0].price * products[0].discount / 100
// products[0].afterDiscount = afterDiscount
// products[0].afterDiscount = products[0].price - products[0].price * products[0].discount / 100
// products[1].afterDiscount = products[1].price - products[1].price * products[1].discount / 100
// products[2].afterDiscount = products[2].price - products[2].price * products[2].discount / 100

// price - price * discount /100
// Calculate aftr discount value for all the products 
// and assign to the same product object

console.log(products);  
/***
 * [
    {
        name: "Product One",
        price: 1000,
        discount: 10,
        afterDiscount: 900
    },
    {
        name: "Product Two",
        price: 2000,
        discount: 10,
        afterDiscount: 1800
    },
    {
        name: "Product Three",
        price: 3000,
        discount: 10,
        afterDiscount: 2700
    }
]
 * 
 */