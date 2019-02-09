
const clock = document.querySelector('.clock'),
      hours = clock.querySelector('.hours'),
      minutes = clock.querySelector('.minutes'),
      seconds = clock.querySelector('.seconds'),
      apm = clock.querySelector('.apm');


function getTime(){
  const getDate = new Date();
  const getHours = (getDate.getHours() > 12) ? getDate.getHours() - 12 : getDate.getHours();
  const getMinutes = getDate.getMinutes();
  const getSeconds = getDate.getSeconds();
  let getAPM = "";



  if(getHours > 12){
    getAPM = "PM"

  }else{
    getAPM = "AM"
  }


  apm.innerText = getAPM;
  hours.innerText = getHours < 10 ? `0${getHours}` : getHours;
  minutes.innerText = getMinutes < 10 ? `0${getMinutes}` : getMinutes;
  seconds.innerText = getSeconds < 10 ? `0${getSeconds}` : getSeconds;
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();
