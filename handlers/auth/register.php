<?php

    include_once "../../data_access/user.php";
    include_once "../../config/database.php";

    $db = new DatabaseManager();
    $user_manager = new UserDAO($db);

    $data = json_decode(file_get_contents("php://input"));

    $user_manager->name = $data->username;
    $user_manager->password = $data->password;

    if ($user_manager->register()) {
        http_response_code(200);
        echo json_encode(array("message" => "Вы успешно зарегистрировались"), JSON_UNESCAPED_UNICODE);
    }

