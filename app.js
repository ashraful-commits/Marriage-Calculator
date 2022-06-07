const marriageForm = document.getElementById('marriage-form');
const requird_alert = document.querySelector('.requird_alert');
const Result_msg =document.getElementById('Result_msg');


// form submition 
marriageForm.addEventListener('submit',(e)=>{
    e.preventDefault();

// get form value 
let name = marriageForm.querySelector('input[name="name"]');
let age = marriageForm.querySelector('input[name="age"]')
let gender = marriageForm.querySelectorAll('input[name="Gender"]')

// get gender value


let gender_name = '';
gender.forEach((item)=>{
   if(item.checked){
       gender_name = item.value;
   }
})


// valide age for marriage 



// form validation 
if(name.value ==''|| age.value == ''||gender_name.value == ''){
   requird_alert.innerHTML  = setAlert('All field are required')
}else if(testNumber(age.value)== false){
   requird_alert.innerHTML=  setAlert('Age not valid','danger');

// get result 
}else{

    let marriageAge = gender_name == 'male'? 21 : 18;
     
    marriageAgeCal(name.value,age.value,gender_name,marriageAge)
    
}


})