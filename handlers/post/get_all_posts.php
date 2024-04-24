<?php
    include_once "../../data_access/post.php";
    include_once "../../config/database.php";

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $db = new DatabaseManager();
    $post_manager = new PostDAO($db->connect());

    $statement = $post_manager->getAll();
    $rows = $statement->rowCount();

    if ($rows > 0) {
        echo json_encode($statement->fetchALL(PDO::FETCH_ASSOC));
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Постов пока нет"), JSON_UNESCAPED_UNICODE);
    }


