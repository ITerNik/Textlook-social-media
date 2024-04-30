<?php
    require_once '../../config/database.php';
    require_once '../../data_access/user.php';
    require_once  '../../config/jwt.php';

    header("Access-Control-Allow-Origin: http://localhost:5173 ");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if (strtoupper($_SERVER["REQUEST_METHOD"]) == "OPTIONS") die();

    $headers = getallheaders();
    $bearer = $headers["Authorization"] ?? '';
    $tokens = explode(" ", $bearer);
    $jwtCoder = new JWTCoder();

    if ($tokens[0] != "Bearer") {
        http_response_code(403);
        die();
    }

    $jwt = trim($tokens[1]);

try {
    $decoded = $jwtCoder->decodeToken($jwt);

    $db = new DatabaseManager();
    $user_manager = new UserDAO($db->connect());
    if ($user_manager->checkUserExist($decoded->username)) {
        echo json_encode(array("username" => $decoded->username));
    } else {
        http_response_code(403);
    }
} catch (Exception $e) {
    http_response_code(403);
    echo "Access denied: " . $e->getMessage();
}

