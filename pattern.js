/***
 * 1
 * 1    2
 * 1    2   3
 * 1    2   3   4
 * 1    2   3   4   5
 * 1    2   3   4   5   6
 * 1    2   3   4   5   6   7
 * 1    2   3   4   5   6   7   8
 * 1    2   3   4   5   6   7   8   9
 * 1    2   3   4   5   6   7   8   9   10
 * 
 * 1    2   3   4   5   6   7   8   9   10
 * 1    2   3   4   5   6   7   8   9
 * 1    2   3   4   5   6   7   8
 * 1    2   3   4   5   6   7
 * 1    2   3   4   5   6
 * 1    2   3   4   5
 * 1    2   3   4
 * 1    2   3
 * 1    2
 * 1
 * 
 * P
 * P    R   
 * P    R   O
 * P    R   O   G
 * P    R   O   G   R
 * P    R   O   G   R   A
 * P    R   O   G   R   A   M
 * P    R   O   G   R   A   M   M
 * P    R   O   G   R   A   M   M   I
 * P    R   O   G   R   A   M   M   I   N
 * P    R   O   G   R   A   M   M   I   N   G
 * 
 */

let prods = [
    {
        // ...
        tags: ["string", ""]
    }
]

for(let i =0; i< prods.length; i++){
    // tags 
    let prod = prods[i];
    let tags = "";
    for(let j = 0; j <prod.tags.length; j++){
        tags += prod.tags[j]
    }
    console.log(tags)
}
for(let i = 1; i <= 10; i++){
    let html = "";
    for(j=1; j <= i; j++) {        
        html += j+"    ";   // 1   1    2   1   2   3
    }
    console.log(html)       // 1   1    2    
}