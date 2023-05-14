let counter = 0;
let name = null;

const handleClick = () => {
    counter++
    document.getElementById('countValue').innerHTML = counter;
}

const getName = () => {
    name = prompt("Enter Your name: ")
    document.getElementById('name').innerHTML = name;
}
getName()

// WAP to list the number of counts for a user. 
// Scenario: 
//     When a user browswe the web, and first clicks the button, 
//     you should ask the user to input name
//     After Entering the name, the click button should be changed to Start button
//     After the first click, the timer should be set for 5 sec 
//     show the list of users who have clicked for how many times within that 5 sec