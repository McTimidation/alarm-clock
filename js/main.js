
const time = document.getElementById('time');

 
const alarmTime = document.getElementById('alarmTime');

const alarmBtn = document.getElementById('alarmSet');

function getTime() {
    const date = new Date();    

    time.textContent = date.toLocaleTimeString();
    }

function  createAlarm() {
    if (alarmTime.value !== ''); {
        const alarm1 = document.createElement('p');
        alarm1.setAttribute('id','alarm1');
        document.getElementById('clockBox').appendChild(alarm1);
        alarm1.textContent = `${alarmTime.value}`;
    }
}




alarmBtn.addEventListener('click', createAlarm);



setInterval(getTime, 1000);





