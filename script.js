import { data } from './data.js';
console.log(data);

//clearing individual results
function clearResults(id) {
    const ol = document.getElementById(id);
    ol.innerText = "";
}

// Clear all results
const allClear = document.getElementById('clear-all');
allClear.addEventListener('click', () => {
    const ol = document.getElementsByClassName('results');
    ol.innerText = "";
})



// task-1: Make a list of users containing a minimum of 50 points and sort them according to the point and display their full name, point, and company name only.

const task1 = data.filter((i) => i.point >= 50);


const sorting = task1.sort((a, b) => a.point - b.point);


const btn1 = document.getElementById('task-1-btn');
btn1.addEventListener('click', () => {
    const ol = document.getElementById('task-1-result');
    ol.innerText = ""
    for (const info of sorting) {


        const li = document.createElement('li');

        li.innerText = `Name: ${info.firstName} ${info.lastName}, ${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'} Company: ${info.company}, ${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}  Point: ${info.point}
        `


        ol.appendChild(li)


    }

})






// task-2: Count how many users got more than 20 and less than 50 point and display the value



const task2 = data.filter((i) => i.point < 50 && i.point > 20);

const btn2 = document.getElementById('task-2-btn');
btn2.addEventListener('click', () => {
    const ol = document.getElementById('task-2-result');
    ol.innerText = `The No of users are ${task2.length}`
})




//task-3 : Find the point of a user whose email is 'Tristian7@yahoo.com'. 
//Display the point and list the users containing that point and display their email addresses.

const task3_1 = data.filter((i) => i.email == "Tristian7@yahoo.com");



const task3_2 = data.filter((i) => i.point === task3_1[0].point)




const btn3 = document.getElementById('task-3-btn');
btn3.addEventListener('click', () => {
    const ol = document.getElementById('task-3-result');
    ol.innerText = '';
    ol.innerText = `The point of a user whose email is 'Tristian7@yahoo.com' is ${task3_1[0].point} 
    
    List the users containing that same point and their email addresses:

    `;


    for (const info of task3_2) {


        const li = document.createElement('li');

        li.innerText = `Name: ${info.firstName} ${info.lastName}, ${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'} Email: ${info.email}, ${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}  Point: ${info.point}`


        ol.appendChild(li)


    }


})