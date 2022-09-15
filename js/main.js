
const time = document.getElementById('time');

const alarmTime = document.getElementById('alarmTime');

const alarmBtn = document.getElementById('alarmSet');






// this function gets the current time down to the second, then sets that time as a string and uses it as the textContent for the 
// div with the id of 'time'
function getTime() {
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
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
        }}
        
        const alarm = document.createElement('p');
        alarm.setAttribute('id','alarm');
        document.getElementById('clockBox').appendChild(alarm);
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


// WHEN CALLED, this function will compare the current time to the set alarm time and alert the alarm time when they match.
function alarmAlert() {   
    const date = new Date();
    if (time.textContent.includes(`${alarm.textContent}`)) {
        alert("It's " + `${alarm.textContent}`);
    }
}


alarmBtn.addEventListener('click', alarmChange);


// calls the getTime function every second
setInterval(getTime, 1000);





