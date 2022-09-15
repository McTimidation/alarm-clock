
const time = document.getElementById('time');

 
function getTime() {
    const date = new Date();// AHA MOMENT! - Declaring this outside of your function will cause your function 
                            //          to reference the time the const is declared
    time.textContent = date.toLocaleTimeString();
    if (time.textContent === '10:50:00 PM'){
        alert("It's 10:50!")
    }
}



setInterval(getTime, 1000);





