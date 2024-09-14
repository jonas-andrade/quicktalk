<?php
session_start();

// Verificar se o usuário está autenticado
if (!isset($_SESSION['authenticated']) || !$_SESSION['authenticated']) {
    header('Location: /projeto/auth.html'); // Redireciona para a página de login
    exit();
}

// Se o usuário estiver autenticado, mostre o dashboard
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuickTalk - Dashboard</title>
    <link rel="stylesheet" href="style/dashboard.css">
</head>
<body>
    <header>
        <h1>Bem-vindo ao Dashboard!</h1>
        <a href="/projeto/logout.php">Sair</a>
    </header>
    <main>
        <p>Conteúdo do dashboard vai aqui.</p>
    </main>
</body>
</html>
