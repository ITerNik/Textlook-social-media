<?php

class PostDAO {
    private $connection;
    private $table_name = "post";
    public $id;
    public $user_id;
    public $content;
    public $likes;
    public $created;

    function __construct($connection) {
        $this->connection = $connection;
    }

    function getAll() {
        $query = "SELECT p.id, p.content, u.image_url, u.username, p.created_at 
                    FROM {$this->table_name} p JOIN \"user\" u on p.user_id = u.id";
        $statement = $this->connection->prepare($query);
        $statement->execute();

        return $statement;
    }

    function create() {
        $query = "INSERT INTO {$this->table_name} (content, user_id, created_at) VALUES (?, ?, ?)";
        $st = $this->connection->prepare($query);

        $this->content = htmlspecialchars(strip_tags($this->content));
        $this->created = htmlspecialchars(strip_tags($this->created));

        $st->bindParam(1, $this->content);
        $st->bindParam(2, $this->user_id);
        $st->bindParam(3, $this->created);

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