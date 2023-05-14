/**
 * Multiple time repeated code blocks 
 * 
 * 
 */

let i = 1;              // 1
while (i <= 10) {       // 11 <= 10 => false
    console.log(i)  // 10
    i++             //  i = 11
}

i = 1;
do {
    // iteration 
    console.log(i)  // 11
    i++             // 12
} while(i <= 10)    // false


for(i = 1; i<=10; i++) {
    // for body
    console.log(i)
}

i=1;
for (; i<=10; i++){
    console.log(i);
}

i = 1 
for(; i<=10; ) {
    console.log(i)
    i++
}

i = 1       // 1
for(; ; ){
    if(i === 5){        // 6 === 5
        i++;        // 6
        continue; 
    } 
    console.log(i); // 1 2 3 4 6
    if(i === 10){   // 4 === 10
        break;
    }
    i++         // 5
   
}

let users = [
    {
        // ...
        role: "user"
    },
    {
        // ...
        role: "admin"
    },
    {
        // ...
        role: "user"
    },
]
// table 
// head 
// body 

// data => [{heading columns}]