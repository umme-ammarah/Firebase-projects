export let isLogin = false; 
document.addEventListener('DOMContentLoaded', () => {
    const formTitle = document.getElementById('formTitle');
    const authButton = document.getElementById('authButton');
    const toggleForm = document.getElementById('toggleForm');
 // Start with Signup page

    toggleForm.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
        authButton.textContent = isLogin ? 'Login' : 'Sign Up';
        toggleForm.textContent = isLogin ? 'Create a new account' : 'Already have an account? Login';
    });
});
