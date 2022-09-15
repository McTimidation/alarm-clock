
const time = document.getElementById('time');

 
const alarm = document.getElementById('alarmTime');

function getTime() {
    const date = new Date();    
   

    time.textContent = date.toLocaleTimeString();
    }

document.getElementById("alarmSet").addEventListener("click", console.log(alarm));




setInterval(getTime, 1000);





