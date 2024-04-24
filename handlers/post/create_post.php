<?php
include_once "../../data_access/post.php";
include_once "../../config/database.php";

$db = new DatabaseManager();
$post_manager = new PostDAO($db->connect());

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->content) &&
    !empty($data->user_id)) {

    $post_manager->content = $data->content;
    $post_manager->user_id = $data->user_id;
    $post_manager->created = date("Y-m-d H:i:s");

    if ($post_manager->create()) {
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