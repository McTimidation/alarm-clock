
const time = document.getElementById('time');

const alarmTime = document.getElementById('alarmTime');

const alarmBtn = document.getElementById('alarmSet');

const alarm = document.createElement('p');
        document.getElementById('clockBox').appendChild(alarm);

const clearBtn = document.getElementById('clearAlarm');


function getTime() {
    const date = new Date();
    let timeString = date.toLocaleTimeString();
    let newTimeString = timeString.split(':');
    hours = newTimeString[0];
    minutes = newTimeString[1];
    otherString = newTimeString[2];
    let secAMPM = otherString.split(' ');
    seconds = secAMPM[0];
    noonNight = secAMPM[1];

    time.textContent = `${hours}`+':'+`${minutes}`+':'+`${seconds}`+' '+`${noonNight}`;


    function alarmChange() {

        let timeSplit = alarmTime.value.split(':'),
        alarmHours = timeSplit[0];
        alarmMinutes = timeSplit[1];
        Number(alarmHours);
        Number(alarmMinutes);
        if (alarmHours > 12) {
            amOrPm = 'PM';
            alarmHours -= 12;
        } else if (alarmHours < 12) {
            amOrPm = 'AM';
            if (alarmHours == 12) {
                amOrPm = 'PM';
            } else if (alarmHours == 0) {
                alarmHours = 12;
                amOrPm = 'AM';
            }
        }
        alarm.textContent = `${alarmHours}`+':'+`${alarmMinutes}`+' '+`${amOrPm}`;
            
        

    }

    
        
        
    

    
    alarmBtn.addEventListener('click', alarmChange);
    
    }


// this function gets the current time down to the second, then sets that time as a string and uses it as the textContent for the 
// div with the id of 'time'

// function getTime() {
    // const date = new Date();
    // time.textContent = date.toLocaleTimeString();
    // if (time.textContent.slice(0,5).startsWith(alarm.textContent.slice(0,5)) && alarm.textContent.includes(time.textContent.slice(9) )) {
        // alert("It's " + alarm.textContent);
    // }
// }

    // function alarmChange() {

    //     let timeSplit = alarmTime.value.split(':'),
    //     alarmHours = timeSplit[0];
    //     alarmMinutes = timeSplit[1];
    //     Number(alarmHours);
    //     Number(alarmMinutes);
    //     if (alarmHours > 12) {
    //         amOrPm = 'PM';
    //         alarmHours -= 12;
    //     } else if (alarmHours < 12) {
    //         amOrPm = 'AM';
    //         if (alarmHours == 12) {
    //             amOrPm = 'PM';
    //         } else if (alarmHours == 0) {
    //             alarmHours = 12;
    //             amOrPm = 'AM';
    //         }
    //     }
    //     alarm.textContent = `${alarmHours}`+':'+`${alarmMinutes}`+' '+`${amOrPm}`;
            
    //     }






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
       alarm.textContent = " ";
    }


clearBtn.addEventListener('click', removeAlarm);

// alarmBtn.addEventListener('click', alarmChange);




// calls the getTime function every second
setInterval(getTime, 1000);

if (`${alarmHours}` === `${hours}` && `${alarmMinutes}` === `${minutes}` && `${amOrPm}` === `${noonNight}`) {
    alert("Wake up!!!");
}



