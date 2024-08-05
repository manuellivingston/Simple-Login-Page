const passwordBtn = document.getElementById('password-eye');


passwordBtn.addEventListener('click', (e) => {
    const passwordInput = document.getElementById('password');
    const icon =passqordBtn.querySelector('i');
    const isVisible =icon.classList.contains('ri-eye-line');
    passwordBtn.type = isVisible ? 'password' : 'text';
    icon.setAtribute('class', isVisible ? 'ri-eye-off-line' : 'ri-eye-line');
    });