const clock = document.getElementById('clock')

// method which is used to set the interval => it is in ms 
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
} , 1000)