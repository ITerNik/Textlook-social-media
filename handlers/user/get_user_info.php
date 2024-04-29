<?php

include_once "../../config/database.php";
include_once "../../data_access/user.php";

header("Access-Control-Allow-Origin: http://localhost:5173 ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$database = new DatabaseManager();
$user = new UserDAO($database->connect());

$user->id = isset($_GET["id"]) ? $_GET["id"] : die();

$user->get();

if ($user->name != null) {
    $user_arr = array(
        "id" =>  $user->id,
        "name" => $user->name,
        "image" => $user->image_url,
    );

    http_response_code(200);
    echo json_encode($user_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Пользователь не существует"), JSON_UNESCAPED_UNICODE);
}