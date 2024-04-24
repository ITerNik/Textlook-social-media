<?php

class UserDAO {
    private $connection;
    private $table_name = "post";
    public $id;

    public $name;
    public $password;

    public $created;

    function __construct($connection) {
        $this->connection = $connection;
    }

    function register() {
        $sql = "INSERT INTO user (username, password) VALUES (?, ?)";
        $statement = $this->connection->prepare($sql);

        $statement->bind_param(1, $_POST['username']);
        $statement->bind_param(2, password_hash($_POST['password'], PASSWORD_DEFAULT));

        if ($statement->execute()) {
            return true;
        }
        return false;
    }
}
