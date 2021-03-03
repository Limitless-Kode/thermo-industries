const contact_form = document.forms.contact_form;

contact_form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const {name, email, message, phone} = contact_form;




});


function showMessage({type, message}){
    console.log(type, message);
}

const regex = {
    'name' : /^[A-z]{2,20}\s[A-z]{2,20}(\s[A-z]{2,20})?$/i,
    'email' : /^[\w\.]{2,}@[A-z]{2,}\.[A-z]{2,}(\.[A-z]{2,})?$/i,
    'phone': /^(\+[0-9]{3,4})?[0-9]{9,10}$/,
    'message': /^[]$/
}