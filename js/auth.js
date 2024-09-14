document.addEventListener('DOMContentLoaded', () => {
    // Manipulação do formulário de login
    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtém os valores dos campos de e-mail e senha
        const email = this.email.value;
        const password = this.password.value;

        // Envia os dados para o backend usando fetch
        fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Exibe uma mensagem de sucesso e redireciona ou atualiza a interface
                Swal.fire({
                    title: 'Success',
                    text: data.message,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    // Redirecionar para a página principal ou atualizar a interface
                    window.location.href = 'home.html'; // Altere para a URL da sua página principal
                });
            } else {
                // Exibe uma mensagem de erro
                Swal.fire({
                    title: 'Error',
                    text: data.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        })
        .catch(error => {
            // Exibe uma mensagem de erro em caso de falha na requisição
            Swal.fire({
                title: 'Error',
                text: 'An error occurred. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    });

    // Manipulação do formulário de registro
    document.getElementById('register').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtém os valores dos campos de username, e-mail e senha
        const username = this.username.value;
        const email = this.email.value;
        const password = this.password.value;
        const repPassword = this.RepPassword.value;

        // Verifica se as senhas coincidem
        if (password !== repPassword) {
            Swal.fire({
                title: 'Error',
                text: 'Passwords do not match.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Envia os dados para o backend usando fetch
        fetch('register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, email: email, password: password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Exibe uma mensagem de sucesso e redireciona ou atualiza a interface
                Swal.fire({
                    title: 'Success',
                    text: data.message,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    // Redirecionar para a página principal ou atualizar a interface
                    window.location.href = 'home.html'; // Altere para a URL da sua página principal
                });
            } else {
                // Exibe uma mensagem de erro
                Swal.fire({
                    title: 'Error',
                    text: data.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        })
        .catch(error => {
            // Exibe uma mensagem de erro em caso de falha na requisição
            Swal.fire({
                title: 'Error',
                text: 'An error occurred. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    });
});

// Função para alternar entre os formulários de login e registro
function toggleForms() {
    const loginForm = document.querySelector('.auth.login');
    const registerForm = document.querySelector('.auth.register');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}
