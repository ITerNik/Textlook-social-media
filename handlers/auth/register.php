<?php
    require_once '../../config/database.php';
    require_once '../../data_access/user.php';
    require_once  '../../config/jwt.php';

    header("Access-Control-Allow-Origin: http://localhost:5173 ");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if (strtoupper($_SERVER["REQUEST_METHOD"]) == "OPTIONS") die();

    $db = new DatabaseManager();
    $user_manager = new UserDAO($db->connect());

    $data = json_decode(file_get_contents("php://input"));

    if (!$user_manager->register($data->username, $data->password, $data->name, $data->surname)) {
        http_response_code(403);
        die();
    }

    $jwtCoder = new JWTCoder();
    echo json_encode(array("token" => $jwtCoder->generateToken($data->username)));

    copy(__DIR__ . "/../../frontend/public/images/Anonimous.png", __DIR__ . "/../../frontend/public/images/" . $data->username . ".png");


