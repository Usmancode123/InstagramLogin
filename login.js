const text=document.querySelector('#name')
const password=document.querySelector('#password')
const btn=document.querySelector('#btn')
let error=document.querySelector('.user-error')
let passError=document.querySelector('.pass-error')

// console.log(text,password,btn);
btn.addEventListener('click',(e)=>{


e.preventDefault()


// username
  if(text.value  == ''){
// console.log('user error');
text.style.border='1px solid red'
error.style.display='block'
  }
   else{
text.style.border='1px solid green'
error.style.display='none'
}

// password 
  if(password.value  == ''){
// console.log('password error');
password.style.border='1px solid red'
passError.style.display='block'
  }
   else{
password.style.border='1px solid green'
passError.style.display='none'
}

console.log(password.value);
console.log(text.value);
})

