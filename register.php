<?php
header('Content-Type: application/json');

$response = array('success' => false, 'message' => 'Registration failed');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Adicione a lógica para validar e registrar o usuário aqui
    if (!empty($data['username']) && !empty($data['email']) && !empty($data['password'])) {
        // Simulação de registro bem-sucedido
        $response = array('success' => true, 'message' => 'Registrado com Successo!');
    }
}

echo json_encode($response);
?>
