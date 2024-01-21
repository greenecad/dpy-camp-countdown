const targetDate=new Date("2024-06-29T10:00:00");
const updateCountdown=()=>{
    const currentTime=new Date();
    const dif=targetDate-currentTime;
    const days=Math.floor(dif/(1000*60*60*24));
    const hours=Math.floor(dif%(1000*60*60*24)/(1000*60*60));
    const minutes=Math.floor(dif%(1000*60*60)/(1000*60));
    const seconds=Math.floor(dif%(1000*60)/1000);
    document.getElementById("days").innerText=days;
    document.getElementById("hours").innerText=hours;
    document.getElementById("minutes").innerText=minutes;
    document.getElementById("seconds").innerText=seconds;
    if(dif<=0){
        clearInterval(interval);
        document.getElementById("timer").innerText="IT'S TIME!!!";
    }
}
const interval=setInterval(updateCountdown, 1000);
