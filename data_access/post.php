<?php

class PostDAO {
    private $connection;
    private $table_name = "post";
    public $id;
    public $likes;

    function __construct($connection) {
        $this->connection = $connection;
    }

    function getAll() {
        $query = "SELECT p.id, p.content, u.image_url, u.username, p.created_at 
                    FROM {$this->table_name} p JOIN \"user\" u on p.user_id = u.id ORDER BY p.created_at DESC";
        $statement = $this->connection->prepare($query);
        $statement->execute();

        return $statement;
    }

    function getByUsername($username) {
        $query = "SELECT p.id, p.content, u.image_url, u.username, p.created_at 
                    FROM {$this->table_name} p JOIN \"user\" u on p.user_id = u.id WHERE u.username = ? ORDER BY p.created_at DESC";
        $statement = $this->connection->prepare($query);
        $statement->bindParam(1, $username);
        $statement->execute();

        if ($statement->rowCount() != 0) {
            return $statement->fetchALL(PDO::FETCH_ASSOC);
        } else {
            return null;
        }
    }

    function create($content, $user_id) {
        $query = "INSERT INTO {$this->table_name} (content, user_id) VALUES (?, ?)";
        $st = $this->connection->prepare($query);

        $st->bindParam(1, $content);
        $st->bindParam(2, $user_id);

        if ($st->execute()) {
            return true;
        }
        return false;
    }

    function delete() {
        $query = "DELETE FROM {$this->table_name} WHERE id = ?";
        $st = $this->connection->prepare($query);

        $this->id = htmlspecialchars(strip_tags($this->id));

        $st->bindParam(1, $this->id);

        if ($st->execute()) {
            return true;
        }
        return false;
    }
}