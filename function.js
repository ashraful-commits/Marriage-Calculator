


function setAlert(msg,type='danger'){
    return `<h6 class="alert alert-${type}">${msg}</h6>`;
}


// pattern test 

function testNumber(num){
    let numberPattern =/^[0-9]{1,3}$/;

    return numberPattern.test(num)
}





// marriage claculation 

function marriageAgeCal(name,age,gender_name,marriageAge){

    if(gender_name == 'male'){
        if(age>= marriageAge){
            Result_msg.innerHTML = setAlert(`<p>Hi ${name} vai , Your are perfect for marriage</p>`,'success');
        }else{
           Result_msg.innerHTML = setAlert(`<p>Hi ${name} vai , Your are not perfect for marriage.You have to wait ${marriageAge-age} Year</p>`,'danger')
        }
    }else{
       if(age>= marriageAge){
           Result_msg.innerHTML = setAlert(`<p>Hi ${name} Apu , Your are perfect for marriage</p>`,'success');
       }else{
          Result_msg.innerHTML = setAlert(`<p>Hi ${name} Apu , Your are not perfect for marriage.You have to wait ${marriageAge-age} Year</p>`,'danger')
       }
    }
}
