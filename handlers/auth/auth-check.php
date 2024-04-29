<?php
    require_once '../../config/database.php';
    require_once '../../data_access/user.php';
    require_once  '../../config/jwt.php';

    header("Access-Control-Allow-Origin: http://localhost:5173 ");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $headers = getallheaders();
    if(strtoupper($_SERVER["REQUEST_METHOD"]) == "OPTIONS"){
        die();
    }
    $bearer = isset($headers["Authorization"]) ? $headers["Authorization"] : '';
    $tokens = explode(" ", $bearer);
    $jwtCoder = new JWTCoder();

    if ($tokens[0] != "Bearer") {
        echo $jwtCoder->generateToken();
        http_response_code(403);
        die();
    }

    $jwt = trim($tokens[1]);

try {
    $decoded = $jwtCoder->decodeToken($jwt);
    $user_id = $decoded->user_id;

    $db = new DatabaseManager();
    $user_manager = new UserDAO($db->connect());

    $user_manager->id = $user_id;
    $user_manager->get();

    echo json_encode(array(
        "login" => $user_manager->name,
        "image_url" => $user_manager->image_url
    ));
} catch (Exception $e) {
    http_response_code(403);
    echo "Access denied: " . $e->getMessage();
}

