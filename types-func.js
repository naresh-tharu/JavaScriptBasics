// recursive Functions
const func1 = (numb) => {
    // query 
    let exits = false;   // false
    if(!exits){
        return numb;
    } else {
        numb += 1;
        func1(numb);
    }
}


let categories = [
    {
        name: "CatName",
        children: [
            {
                name: "Child cat 1",
                children: [
                    {
                        name: "child child cat 1",
                        children: [
                            {
                                name: "Child child child cat 1",
                                children: null
                            }
                        ]
                    }
                ]
            }
        ]
    }
]



function rec(data) {
    for(cat of data){
        console.log(cat.name);
        if(cat.children){
            rec(cat.children)
        }
    }
}
rec(categories);
// let path = "/uploads/image/thumbnail/banner"
// let numb = [12, 34, 2, 45, 65, 32, 1, 23]

// mkdir(path, 0777, true)

// for(let cat of categories){
//     console.log(cat.name)
//     if(cat.children){
//         for(let child1 of cat.children){
//             console.log(child1.name)
//             if(child1.children){
//                 for(let child2 of child1.children){
//                     console.log(child2.name)
                    
//                 }
//             }
//         }
//     }
// }




let result = func1(123)
// number random => DB check => unique


// clouser 
const callOne = () => {
    console.log("I am in callOne")
    const callTwo = (a) => {
        console.log("I am in callTwo")
    }
    return callTwo;
    // callTwo()
}

let x = callOne()
x(10)
// sync, async 

// callTwo()// 