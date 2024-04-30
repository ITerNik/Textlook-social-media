<?php
    include_once "../../data_access/post.php";
    include_once "../../config/database.php";

    header("Access-Control-Allow-Origin: http://localhost:5173 ");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $db = new DatabaseManager();
    $post_manager = new PostDAO($db->connect());

    $posts = $post_manager->getByUsername($_GET["username"]);

    if ($posts) {
        echo json_encode($posts);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Постов пока нет"), JSON_UNESCAPED_UNICODE);
    }