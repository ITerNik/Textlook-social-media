<?php
    include_once "../../data_access/post.php";
    include_once "../../data_access/user.php";
    include_once "../../config/database.php";

    header("Access-Control-Allow-Origin: http://localhost:5173 ");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $db = new DatabaseManager();
    $post_manager = new PostDAO($db->connect());
    $user_manager = new UserDAO($db->connect());

    $user = $user_manager->getInfoByUsername($_GET["username"]);

    if ($post_manager->likePost($user["id"], $_GET["post_id"])) {
        echo json_encode(array(
            "message" => "Liked successfully"
        ));
    } else {
        http_response_code(503);
        echo json_encode(array(
            "message" => "Error while liking post"
        ));
    }
