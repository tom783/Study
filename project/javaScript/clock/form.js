const form = document.querySelector('.js-form'),
      input = form.querySelector('input'),
      userNameInner = document.querySelector('.text'),
      clearButton = document.querySelector('.clear');


const currentUser = "userName",
      active_form = "active_form";


function loadName(){
  const userName = localStorage.getItem(currentUser);

  if(userName === null){
    setLocalstorage();
  } else{
    innerUserName(userName);
  }
}

function innerUserName(userName){
  userNameInner.classList.remove('active_form');
  clearButton.classList.remove('active_form');
  form.classList.add('active_form');
  userNameInner.querySelector('.userName').innerText = userName;
  clearButton.addEventListener("click", resetUserName);
}

function setLocalstorage(){
  userNameInner.classList.add('active_form');
  clearButton.classList.add('active_form');
  form.classList.remove('active_form');
  form.addEventListener("submit", handleSubmit);

}

function handleSubmit(event){
  event.preventDefault();
  const inputUserName = input.value;
  localStorage.setItem('userName', inputUserName);
  innerUserName(inputUserName);
}

function resetUserName(){
  localStorage.removeItem(currentUser);
  userNameInner.classList.add('active_form');
  clearButton.classList.add('active_form');
  form.classList.remove('active_form');
}


function init(){
  loadName();
}

init();
