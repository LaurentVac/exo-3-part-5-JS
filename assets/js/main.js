let validation = document.getElementById("button");
let nom = document.getElementById("prenom");
let nom_m = document.getElementById("prenomM");
let nom_v = /^[a-zA-ZéèïÉ][a-zéèêâçîï]+([-'\s][a-zA-ZéèîïÉ][a-zéèêàçîï]+)?/;

let mail= document.getElementById("mail");
let mail_i=document.getElementById("mail-i");
let mail_r =/^[\w-\.]+@{1}[a-z0-9\-]+[\.]{1}[a-z]{2,6}$/;

let age = document.getElementById("age");
let age_i = document.getElementById("num");
let age_r = /^[0-8]$/;
validation.addEventListener("click", f_valid);

function button() {
    if (nom.validity.valueMissing) {
        
        nom_m.textContent = "Il manque ton nom";
        nom_m.style.color = "red";
        // test de regex nom_v du champ de la variable nom
    }else if (nom_v.test(nom.value)==false  ){
        
        nom_m.textContent = "Format invalide";
        nom_m.style.color = "red";
    } else if (mail_r.test(mail.value)== false){
       
        mail_i.textContent = "Votre email doit comporter un @ et finir  .com/.fr";
        mail_i.style.color = "red";


    }else if (age_r.test(age.value)== false) {
         
          age_i.textContent= "ne doit pas comporter de 9";
          age_i.style.color="red";

    } else {

    }

}