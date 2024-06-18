const form=document.getElementById('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit',function(event){
 event.preventDefault();


 const fruitsEnterd=document.getElementById('fruit-to-add').value;
 const li=document.createElement('li');
 const liText=document.createTextNode(fruitsEnterd);
 li.className='fruit';
 li.appendChild(liText);



    const descriptionPara = document.createElement('p');
 descriptionPara.style.fontStyle='italic'
 descriptionPara.className = 'fruit-description'; // Add a class for styling
 const description = document.getElementById('description').value;
 const descriptionText = document.createTextNode(description);
 descriptionPara.appendChild(descriptionText);
 li.appendChild(descriptionPara);


 const deleteBtn=document.createElement('button');
 const deleteBtnText=document.createTextNode('x');
 deleteBtn.appendChild(deleteBtnText);
 deleteBtn.className='delete-btn';
 li.appendChild(deleteBtn);


 const editBtn=document.createElement('button');
 const editBtnText=document.createTextNode('Edit');
 editBtn.appendChild(editBtnText);
 editBtn.className='edit-btn';
 li.appendChild(editBtn);

 const editForm=document.createElement('form');
 editForm.style.display='none';
 const editFruit=document.createElement('input');
 editFruit.className='fruit';
 editForm.appendChild(editFruit);
 li.appendChild(editForm);
  fruits.appendChild(li);
  
})
 
const fruit=document.getElementsByClassName('fruit');
for(let i=0;i<fruit.length;i++){
 const editBtn=document.createElement('button');
 const editBtnText=document.createTextNode('Edit');
 editBtn.appendChild(editBtnText);
 editBtn.className='edit-btn';
 fruit[i].appendChild(editBtn);
}

const filter=document.getElementById('filter');
filter.addEventListener('keyup',function(event){
 const textEnterd=event.target.value.toLowerCase();
 const fruit=document.getElementsByClassName('fruit');
 for(let i=0;i<fruit.length;i++){
   const current=fruit[i].firstChild.textContent.toLowerCase();
   if(current.indexOf(textEnterd)===-1){
     fruit[i].style.display='none';
   }
   else{
     fruit[i].style.display='flex';
   }
 }
})

 fruits.addEventListener('click', function(event) {
 if(event.target.classList.contains('delete-btn')){
   const fruitsToDelete=event.target.parentElement;
   fruits.removeChild(fruitsToDelete);
}
})

const h3=document.createElement('h2');
 const h3Text=document.createTextNode("Buy high quality organic fruits online");
 h3.appendChild(h3Text);
 h3.style.fontStyle='italic';
 h3.style.backgroundColor='white'

 const mainHeading=document.getElementById('main-heading');
 mainHeading.insertAdjacentElement('afterend', h3);

 const para=document.createElement('input');
 para.type='text';
para.id='description';
para.placeholder='enter the description of the fruit';
 const text=document.getElementById('fruit-to-add');
text.insertAdjacentElement('afterend',para);