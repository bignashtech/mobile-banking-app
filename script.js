//for the login form

const togglePassword = document.getElementById('togglePassword');  
const passwordInput = document.getElementById('password');  

togglePassword.addEventListener('click', function () {  
    // Toggle the type attribute  
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';  
    passwordInput.setAttribute('type', type);  
    // Toggle the eye / eye-slash icon  
    this.classList.toggle('fa-eye-slash');  
    this.classList.toggle('fa-eye');  
});  