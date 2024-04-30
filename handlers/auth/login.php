<?php

    require_once '../../config/database.php';
    require_once '../../data_access/user.php';
    require_once  '../../config/jwt.php';

    header("Access-Control-Allow-Origin: http://localhost:5173 ");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if (strtoupper($_SERVER["REQUEST_METHOD"]) == "OPTIONS") die();

    $data = json_decode(file_get_contents("php://input"));

    $db = new DatabaseManager();
    $user_manager = new UserDAO($db->connect());

    if (!$user_manager->login($data->username, $data->password)) {
        http_response_code(403);
        die();
    }

    $jwtCoder = new JWTCoder();
    echo json_encode(array("token" => $jwtCoder->generateToken($data->username)));

