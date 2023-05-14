const myPromise = () => {
    return new Promise((res, rej) => {
        const x = true;
        if(x) {
            res("I am resolve of myPromise")
        } else {
            rej("i am reject of myPromise")
        }
    })
} 


const myPromise1 = async () => {
    let y = true;
    if(y){
        // resolve
        return "I am resolve of myPromise1"
    } else {
        // reject
        throw "I am reject of myPromise1"
    }
} 
const myPromise2 = async () => {
    let z = true;
    if(z){
        // resolve
        return "I am resolve of myPromise2"
    } else {
        // reject
        throw "I am reject of myPromise2"
    }
} 

// myPromise()
// .then((res) => {
//     console.log(res)
//     return myPromise1()
// })
// .then((res1) => {
//     console.log(res1)
//     return myPromise2()
// })
// .then((res2) => {
//     console.log(res2)
// })
// .catch((rej) => {
//     console.log(rej)
// })


// myPromise()
//     .then((res) => {
//         console.log(res)
//         myPromise1()
//             .then((res1) => {
//                 console.log(res1)
//                 myPromise2()
//                     .then((res2) => {
//                         console.log(res2)
//                     })
//                     .catch((err) => {
//                         console.log(err)
//                     })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     })
//     .catch((rej) => {
//         console.log(rej)
//     })



const handlePromise = async() => {
    
    try{
        let res2 = await myPromise()
        console.log(res2)
        let result = await myPromise1()
         console.log(result)
        let res3 = await myPromise2();
        console.log(res3)
    } catch(err) {
        console.error(err)
    }
}

handlePromise()