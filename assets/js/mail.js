const contact_form = document.forms.contact_form;
const status = document.querySelector("#status");

document.querySelectorAll("input").forEach((field)=>{
    field.addEventListener("change",()=>{
        field.style.outlineColor = '#179C6B';
        if(field.parentElement.lastChild.classList?.contains("error"))
            field.parentElement.lastChild.remove();
    });
});

const textarea = document.querySelector("textarea");
textarea.addEventListener("change",()=>{
    textarea.style.outlineColor = '#179C6B';
    if(textarea.parentElement.lastChild.classList?.contains("error"))
        textarea.parentElement.lastChild.remove();
});


contact_form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const {name, email, message, phone} = contact_form;

    if(validate({name, email, message, phone})){
        status.style.color = 'orange';
        status.innerText = "Sending Message...";

        var formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('phone', phone);

        const request = await fetch(
            'assets/scripts/mail.php',
            { 
                method: 'POST', 
                mode: "same-origin",
                credentials: "same-origin",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email, message, phone})
            }
        );

        console.log(request.text());

        status.style.color = '#179C6B';
        status.innerText = "Message Sent";
        contact_form.reset();
    }

});



window.addEventListener("error",(evt)=>{
    const {field, description} = evt.detail;
    field.focus();
    field.style.outlineColor = 'red';


    const errorElement = document.createElement("div");
    errorElement.classList.add("error");
    errorElement.innerText = description;

    field.parentElement.append(errorElement);
});


function validate({name, email, message, phone}) {
    if(!regex.name.test(name.value)){
        const event = new CustomEvent("error",{detail: {field: name, description: "Please Enter A Valid Full Name"} });
        window.dispatchEvent(event);
        return false;
    }
    if(!regex.email.test(email.value)){
        const event = new CustomEvent("error",{detail: {field: email, description: "Please Enter A Valid Email Address"} });
        window.dispatchEvent(event);
        return false;
    }
    if(!regex.phone.test(phone.value)){
        const event = new CustomEvent("error",{detail: {field: phone, description: "Please Enter A Valid Phone Number"} });
        window.dispatchEvent(event);
        return false;
    }
    if(!regex.message.test(message.value)){
        const event = new CustomEvent("error",{detail: {field: message, description: "Please Enter A Valid Message"} });
        window.dispatchEvent(event);
        return false;
    }
    return true;
}


const regex = {
    'name' : /^[A-z]{2,20}\s[A-z]{2,20}(\s[A-z]{2,20})?$/i,
    'email' : /^[\w\.]{2,}@[A-z]{2,}\.[A-z]{2,}(\.[A-z]{2,})?$/i,
    'phone': /^(\+[0-9]{3,4})?[0-9]{9,10}$/,
    'message': /^[\w\.\s]{2,}$/
}