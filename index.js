var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
const oldElement = document.getElementById("start");
const editTime = document.getElementById("edit");


const newElement = oldElement.cloneNode(true);
newElement.innerText = "Stop";
newElement.setAttribute("id", "stop");
oldElement.addEventListener("click", function () {
    minutes.setAttribute("disabled", true);
    seconds.setAttribute("disabled", true);
    var min = parseInt(minutes.value);
    var sec = parseInt(seconds.value);
    var totaltime = min*60 + sec;
   intervalid =  setInterval(function () {  
    totaltime--
    var timeinminutes = parseInt((totaltime)/60);
    var timeinseconds = totaltime%60;
    if(timeinseconds<10){
        timeinseconds = "0"+timeinseconds;
    }
    if(timeinminutes<10){
        timeinminutes = "0"+timeinminutes;
    }
    minutes.value = timeinminutes;
    seconds.value = timeinseconds;
    oldElement.replaceWith(newElement);
    }, 1000);

})

newElement.addEventListener("click", function () {
    newElement.replaceWith(oldElement);
    clearInterval(intervalid);
})


editTime.addEventListener("click", function () {
    minutes.removeAttribute("disabled");
    seconds.removeAttribute("disabled");
})
// newElement.innerHTML = "Stop";
// newElement.id = "stop";
// oldElement.replaceWith(newElement);
// console.log(minutes.value);
