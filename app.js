var min=0;
var sec=0;
var msec=0;
var minHeading=document.getElementById('min');
var secHeading=document.getElementById('sec');
var msHeading=document.getElementById('ms');
var b=document.getElementById('dis');
var interval;
function timer(){
    msec++;
    if(msec==1){
        b.disabled=true;

    }
    msHeading.innerHTML=msec;
    if(msec>=100){
       
        sec++;
        secHeading.innerHTML=sec;
        msec=0
    }
    if(sec>=60){
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }


}

function start(){
    interval=setInterval(timer,10);
}

function stop(){
    clearInterval(interval);
    b.disabled=false;
}
function reset(){
    clearInterval(interval);
    min=0;
    msec=0;
    sec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msHeading.innerHTML=msec;
    b.disabled=false;

}