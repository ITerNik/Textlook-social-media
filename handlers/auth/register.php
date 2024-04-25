<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT');


include_once "../../data_access/user.php";
    include_once "../../config/database.php";

    $db = new DatabaseManager();
    $user_manager = new UserDAO($db->connect());

    $data = json_decode(file_get_contents("php://input"));

    $user_manager->name = $data->username;
    $user_manager->password = $data->password;
    $user_manager->image_url = "public/images/{$data->username}.png";

    if ($user_manager->register()) {
        http_response_code(200);
        echo json_encode(array("message" => "Вы успешно зарегистрировались"), JSON_UNESCAPED_UNICODE);
    }

