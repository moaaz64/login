let from = document.getElementById('from');
let NameERORR = document.getElementById('nameERORR');
let PasswordERORR = document.getElementById('passworderorr');
let emailERORR = document.getElementById('emailERORR')
let password = document.getElementById('password');
let namefamilyERORR = document.getElementById('namefamilyeroor');
let email = document.getElementById('email');
let namee = document.getElementById('name');
let namefamily = document.getElementById('namefamily');


from.addEventListener('submit',function(event){

    let erorr = false;

    if(namefamily.value.trim() === ""){
        namefamily.style.border = "solid red";
        erorr = true;
        namefamilyERORR.style.color="red";
        namefamilyERORR.innerHTML = "اسم العائلة الذي أدخلته قصير جداً. 3 أحرف هو الحد الأدنى";
    }else if(namefamily.value){
        namefamilyERORR.innerHTML = "";
        namefamily.style.border = "";
     }

    if(namee.value.trim() === ""){
        namee.style.border = "solid red";
        erorr = true;
        NameERORR.style.color="red";
        NameERORR.innerHTML = "الاسم الذي أدخلته قصير جداً. 3 أحرف هو الحد الأدن";
    }else if(namee.value){
        NameERORR.innerHTML = "";
        namee.style.border = "";
     }

    if(email.value.trim() === ""){
        email.style.border = "solid red";
        emailERORR.style.color="red";
        erorr = true;
        emailERORR.innerHTML = "لم تدخل بريدك الالكتروني بعد";
    }else if(email.value){
       emailERORR.innerHTML = "";
       email.style.border = "";
    }

    if(password.value.trim() === ""){
        password.style.border = "solid red";
        PasswordERORR.style.color="red";
        erorr = true;
        PasswordERORR.innerHTML = "لم تدخل كلمة مرور بعد";

    }else if(password.value){
        PasswordERORR.innerHTML = "";
        password.style.border = "";
    }



})