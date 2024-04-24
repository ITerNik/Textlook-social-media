<?php

    include_once "../../data_access/post.php";
    include_once "../../config/database.php";

    $db = new DatabaseManager();
    $post_manager = new PostDAO($db->connect());

    $data = json_decode(file_get_contents("php://input"));

    $post_manager->id = $data->post_id;
    if ($post_manager->delete()) {
        http_response_code(200);
        echo json_encode(array("message" => "Пост удалён успешно"), JSON_UNESCAPED_UNICODE);
    }
else {
    http_response_code(503);
    echo json_encode(array("message" => "Не удалось удалить пост"));
}
