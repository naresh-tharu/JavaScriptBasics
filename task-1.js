// Create two variables 
// marks_obt, percentage 
// to calculate percentage based on marks_obt, consider 500 as a total 
// Based on the precentage print: 
// per >= 80 => First Division with Distinction
// per >= 60  < 80 => First Division
// per >= 45  < 60 => Second Division
// per >= 32  < 45 => Third Division
// per < 32 => Sorry! You are failed
let marksObt = 300;
let per = marksObt/500 * 100;
// 79.9

if(per >= 80) {
    console.log("First Division with Distinction")
} else {
    // 100
    if(per >= 60){
        console.log("First Division")
    } else {
        // < 60
        if(per >= 45){
            console.log("Second Division")
        } else {
            // < 45
            if(per >= 32) {
                console.log("Third Division")
            } else {
                // < 32
                console.log("Sorry! You are failed")
            }
        }
    }
}

if(per >= 80) {
    console.log("First Division with Distinction")
} else if(per >= 60 ){
    console.log("First Division")
} else if(per >= 45){
    console.log("Second Division")
} else if(per >= 32) {
    console.log("Third Division")
} else if(per<32){
    console.log("Sorry! You are failed")
}



console.log(
    per >= 80 
        ? "Frist Division with Distinction" 
        : 
        (
            per >= 60 
                ? "First Division" 
                : 
                (
                    per >= 45 
                    ? "Second Division" 
                    : 
                    (
                        per >= 32 
                        ? "Third Division" 
                        : 
                            "Sorry! You are failed"
                    )
                )
        )
)


switch(true){
    case (per >= 80):
        console.log("First Division with Distinction")
        break;
    case (per >= 60):
        console.log("First Division")
        break;
    case (per >= 45):
        console.log("Second Division")
        break;
    case (per >= 32):
        console.log("Third Division")
        break;
    default: 
        console.log("Sorry! You are failed")
        break;
}



// equal 
let day = "Sunday"
// Saturday, Sunday => Holiday 
// Monday-Thursday => Weekday 
// Friday => Weekend

if(day === "Friday") {
    console.log("Weekend")
} else if(day == "Sunday" || day == "Saturday"){
    console.log("Holiday")
} else {
    console.log("Weekday")
}

switch(day){
    case "Friday":
        console.log("Weekend");
        break;
    case "Sunday":
    case "Saturday":
        console.log("Holiday")
        break;
    default: 
        console.log("Weekday")
        break;
}
