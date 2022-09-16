
const time = document.getElementById('time');

const alarmTime = document.getElementById('alarmTime');

const alarmBtn = document.getElementById('alarmSet');

const alarm = document.createElement('p');
        alarm.setAttribute('id','alarm');
        document.getElementById('clockBox').appendChild(alarm);

const clearBtn = document.getElementById('clearAlarm');




// this function gets the current time down to the second, then sets that time as a string and uses it as the textContent for the 
// div with the id of 'time'

function getTime() {
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
    if (time.textContent.slice(0,5).startsWith(alarm.textContent.slice(0,5)) && alarm.textContent.includes(time.textContent.slice(9) )) {
        alert("It's " + alarm.textContent);
    }
}

    function alarmChange() {
        if (alarmTime.Value !== ''){
        let timeSplit = alarmTime.value.split(':'),
        hours = timeSplit[0];
        minutes = timeSplit[1];
        Number(hours);
        Number(minutes);
        if (hours > 12) {
            amOrPm = 'PM';
            hours -= 12;
        } else if (hours < 12) {
            amOrPm = 'AM';
            if (hours == 0) {
                hours = 12;
                amOrPm = 'AM';
            } else {
                amOrPm = 'PM';
            }}
        
        alarm.textContent = `${hours}`+':'+`${minutes}`+' '+`${amOrPm}`;
    }
}






// this function first checks to see if the input for alarmTime is empty, then if empty is false, will create a <p> element
// with id of 'alarm1', append it to the <div id='clockBox', and set the textContent of alarm1 = alarmTime.value


    
    
        
    


//  an attempt to write a function to create a new element with an updating id for different alarms
// function  createAlarm() {
    
    // if (alarmTime.value !== ''); {
        // if (alarm) {}
        // else {
        // document.createElement('p');
        // 
        // document.getElementById('clockBox').appendChild(alarm1);
        // alarm1.textContent = `${alarmTime.value}`;
    // }
// }

function removeAlarm() {
    if (alarm.textContent !== '') {
        alarm.remove();
    }
}



alarmBtn.addEventListener('click', alarmChange);

clearBtn.addEventListener('click', removeAlarm);


// calls the getTime function every second
setInterval(getTime, 1000);


