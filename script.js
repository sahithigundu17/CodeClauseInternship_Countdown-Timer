const countDownDate=new Date("Jan 1, 2025 00:00:00").getTime();

const interval= setInterval(()=>{
    const now=new Date().getTime();
    const duration = countDownDate - now;
     
    if(duration <0)
    {
        clearInterval(interval);
        updateDuration(0);
        countdownComplete();
        return;
    }

    updateDuration(duration);
},1000);

function updateDuration(duration){
    const days=Math.floor(duration/(1000*60*60*24));
    const hours=Math.floor((duration%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((duration%(1000*60*60))/(1000*60));
    const seconds=Math.floor((duration%(1000*60))/1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}
function countdownComplete() {
    document.body.innerHTML = "<h1>Countdown Completed!</h1>";
    console.log("Countdown Completed!");
}