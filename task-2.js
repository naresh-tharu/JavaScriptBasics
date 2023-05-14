// Calculate Electricity bill based on the following: 
// consider total units consumed = 150 units
// for 
// 0-50 => NPR +
// for next 20 units => Npr. 5/unit
// for next 30 unit => Npr. 8/unit
// for remaining    => Npr. 10/unit

let totalUnits = 150;

let totalAmt = 0;

let basePrice = 80
if(totalUnits <= 50) {
    totalAmt = basePrice
} 

if(totalUnits <= 70){
    totalAmt = basePrice + (totalUnits-50)*5
} 

basePrice = basePrice + 100;
if(totalUnits <= 100) {
    totalAmt = basePrice + (totalUnits - 70) * 8
} 

basePrice = basePrice+240
if(totalUnits > 100){
    totalAmt = basePrice + (totalUnits-100) * 10;
}

console.log("TotalAmount: ", totalAmt)