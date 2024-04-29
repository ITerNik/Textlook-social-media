<?php

class UserDAO {
    private $connection;
    private $table_name = "\"user\"";
    public $id;

    public $name;
    public $password;

    public $image_url;

    public $created;

    function __construct($connection) {
        $this->connection = $connection;
    }

    function register() {
        $sql = "INSERT INTO {$this->table_name} (username, password, image_url) VALUES (?, ?, ?)";
        $statement = $this->connection->prepare($sql);

        $statement->bindParam(1, $this->name);
        $statement->bindParam(2, password_hash($this->password, PASSWORD_DEFAULT));
        $statement->bindParam(3, $this->image_url);

        if ($statement->execute()) {
            return true;
        }
        return false;
    }

    function getUserById(int $id): array
    {
        $query = "SELECT * FROM {$this->table_name} u WHERE u.id = ? LIMIT 1";
        $st = $this->connection->prepare($query);
        $st->bindParam(1, $id);
        $st->execute();

        $row = $st->fetch(PDO::FETCH_ASSOC);

        return array(
            "username" => $row["username"],
        );
    }
}
