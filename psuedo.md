# Alarm Clock 

## Display
- Show current time - hour, minute, second
- show time alarm(s) are set to
- Digital display
### Bonus Display 
- Add analog display
- show date month and year

## Functionality
- time updates by the second without needing to refresh the browser
- alarm alerts when time is hit (no need for noise)
 - can write an alert that matches the text string of Date(), but need to find a way to get input to match Date()
- input for alarm - needs to be preset so that string can be matched accurately

- need the string of the time.textContent to omit the 5th, 6th, 7th, and 8th, string characters in order to compare to alarm.value

// AHA MOMENT! - Declaring this outside of your function will cause your function to reference the time the const is declared


#### html
<html>
 <body>
    <div id="clockBox">
    <div id="time">
    </div>
 </body>
</html>

time element?


#### css
body {
    background-color: #F7BE80
}

css for AM and PM



#### javascript

time function - perhaps a date object? 

if statement for alarm

use alarm.value as textContent for created <p> in createAlarm().

run that function as a result of the click event for alarmBtn

if statement for AM/PM toggle (STRETCH)





