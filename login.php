<?php
header('Content-Type: application/json');

// Inicializa a resposta padrão
$response = array('success' => false, 'message' => 'Dados Inválidos');

// Verifica se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém os dados JSON enviados na requisição
    $data = json_decode(file_get_contents('php://input'), true);

    // Verifica se os dados de e-mail e senha foram recebidos
    if (isset($data['email']) && isset($data['password'])) {
        $email = $data['email'];
        $password = $data['password'];

        // Aqui você deve adicionar a lógica para verificar o e-mail e a senha
        // Por exemplo, verificar com o banco de dados
        // Esta é uma simulação de autenticação bem-sucedida
        if ($email === 'test@example.com' && $password === 'password') {
            $response = array('success' => true, 'message' => 'Autenticado com Sucesso!');
        }
    }
}

// Retorna a resposta como JSON
echo json_encode($response);
?>
