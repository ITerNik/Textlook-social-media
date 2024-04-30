<?php
    include_once "../../data_access/post.php";
    include_once "../../data_access/user.php";
    include_once "../../config/database.php";
    include_once "../../config/jwt.php";

    header("Access-Control-Allow-Origin: http://localhost:5173 ");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $headers = getallheaders();
    $bearer = $headers["Authorization"] ?? '';
    $tokens = explode(" ", $bearer);
    $jwtCoder = new JWTCoder();

    $jwt = trim($tokens[1]);
    $user_id = null;

    $decoded = $jwtCoder->decodeToken($jwt);

    $db = new DatabaseManager();
    $user_manager = new UserDAO($db->connect());
    $post_manager = new PostDAO($db->connect());


    $user_id = $user_manager->getIdByUsername($decoded->username);

    if (!$user_id) {
        http_response_code(404);
        die();
    }

    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->content)) {
        if ($post_manager->create($data->content, $user_id)) {
            http_response_code(201);
            echo json_encode(array("message" => "Пост был создан успешно"), JSON_UNESCAPED_UNICODE);
        }
        else {
            http_response_code(503);
            echo json_encode(array("message" => "Невозможно создать пост"), JSON_UNESCAPED_UNICODE);
        }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Невозможно создать пост. Контент не должен быть пуст"), JSON_UNESCAPED_UNICODE);
}