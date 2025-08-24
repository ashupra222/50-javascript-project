let email_text = document.querySelector('.email-text')
let pass_text = document.querySelector('.password-text')

let email_input = document.getElementById('email')
let pass_input = document.getElementById('password')

function onEmail() {
    let texts = email_text.children
    let i = 0
    let interval = setInterval(transporter, 80)
    function transporter() {
        texts[i].style.transform = 'translateY(-130%)'
        i++
        if (i >= texts.length) clearInterval(interval)
    }
}
function outEmail() {
    let texts = email_text.children
    let i = 0
    if (email_input.value.trim() == ""){
        let interval = setInterval(transporter, 80)
        email_input.value = ""
    }
    function transporter() {
        texts[i].style.transform = 'translateY(0)'
        i++
        if (i >= texts.length) clearInterval(interval)
    }
}
function onPassword() {
    let texts = pass_text.children
    let i = 0
    let interval = setInterval(transporter, 80)
    function transporter() {
        texts[i].style.transform = 'translateY(-130%)'
        i++
        if (i >= texts.length) clearInterval(interval)
    }
}
function outPassword() {
    let texts = pass_text.children
    let i = 0
    if (pass_input.value.trim() == "")  {
        let interval = setInterval(transporter, 80)
        pass_input.value = ''
    }
    function transporter() {
        texts[i].style.transform = 'translateY(0)'
        i++
        if (i >= texts.length) clearInterval(interval)
    }
}


email_input.addEventListener('focus', onEmail)
email_input.addEventListener('focusout', outEmail)

pass_input.addEventListener('focus', onPassword)
pass_input.addEventListener('focusout', outPassword)