const submit = document.querySelector('button');
const input = document.querySelector('input');

 
submit.addEventListener('click', ()=>{
 if (isNaN(input.value)){
        alert('please input only numbers');
    } else{
        if(input.value % 2 === 0){
            alert(`${input.value} is an even number`)
        }
        else{
            alert(`${input.value} is an odd number`)
        }
    }
  
})