let date;
let hour;
let min;
let sec;
let spanTime=document.getElementById("time");
let spanDate=document.getElementById("date");
let dt=document.getElementById("dt");
let onOffBtn=document.getElementById("on-off-btn");

setTime=()=>{
     date = new Date();
     hour = date.getHours();
     min = date.getMinutes();
     sec = date.getSeconds();
     spanTime.innerHTML=hour+":"+min+":"+sec;
     spanDate.innerHTML=date.toLocaleDateString();
}
setInterval(setTime,1000);

function buttonOnOff()
{
     let value=onOffBtn.getAttribute("value");
     if(value==1){
          onOffBtn.value="0";
          console.log(dt.innerHTML);
          console.log(onOffBtn.value);
          dt.style.visibility="hidden";
     }     
     else{
          onOffBtn.value="1";      
          console.log(onOffBtn.value)
          dt.style.visibility="visible";


     }
}

// setInterval(() => {
//     date = new Date();
//      hour = date.getHours();
//      min = date.getMinutes();
//      sec = date.getSeconds();
//      span.innerHTML=hour+":"+min+":"+sec+" on date "+date.toLocaleDateString();
    
// }, 1000);