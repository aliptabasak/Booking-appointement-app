// console.log(window);
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// const ul=document.querySelector('.items');
// ul.firstElementChild.textContent='HELLO';
// ul.firstElementChild.style.background='green';
// ul.children[1].style.background='yellow';
const btn=document.querySelector('.btn');
// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('click');
// });
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
   document.querySelector('#my-form').style.background='#ccc';
   document.querySelector('body').classList.add('bg-dark');
   document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'; 
});
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
   document.querySelector('#my-form').style.background='black';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'; 
});
const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onsubmit);


function onsubmit(e){
e.preventDefault();
const name=nameInput.value;
const email=emailInput.value;
localStorage.setItem('name',name);
localStorage.setItem('email',email);

if(nameInput.value===''|| emailInput.value===''){
    msg.classList.add('error');
    msg.innerHTML='Please enter all fields.';

    setTimeout(()=>msg.remove(),3000);
}else{
   
   const li=document.createElement('li');
   li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

   userList.appendChild(li);

   nameInput.value='';
   emailInput.value='';
}



}

