<?php

class PostDAO {
    private $connection;
    private $table_name = "post";
    function __construct($connection) {
        $this->connection = $connection;
    }

    function getAll() {
        $query = "SELECT p.id, u.name, u.surname, u.username, p.content, p.created_at, count(l.user_id) AS likes
                    FROM post p JOIN \"user\" u on p.user_id = u.id LEFT JOIN post_like l ON p.id = l.post_id
                    GROUP BY p.id, u.name, u.surname, u.username, p.content, p.created_at ORDER BY p.created_at DESC";
        $statement = $this->connection->prepare($query);
        $statement->execute();

        return $statement;
    }

    function checkLike($user_id, $post_id): bool {
        $query = "SELECT 1 FROM post_like WHERE user_id = :user_id AND post_id = :post_id";
        $statement = $this->connection->prepare($query);
        $statement->bindValue(':user_id', $user_id);
        $statement->bindValue(':post_id', $post_id);
        $statement->execute();

        return $statement->rowCount() > 0;
    }

    function likePost($user_id, $post_id): bool {
        $query = "INSERT INTO post_like (user_id, post_id) VALUES (?, ?)";
        $statement = $this->connection->prepare($query);
        $statement->bindValue(1, $user_id);
        $statement->bindValue(2, $post_id);

        return $statement->execute();
    }

    function removeLike($user_id, $post_id): bool {
        $query = "DELETE FROM post_like WHERE user_id = ? AND post_id = ?";
        $statement = $this->connection->prepare($query);
        $statement->bindValue(1, $user_id);
        $statement->bindValue(2, $post_id);

        return $statement->execute();
    }

    function getByUsername($username) {
        $query = "SELECT p.id, u.name, u.surname, u.username, p.content, p.created_at, count(l.user_id) AS likes
                    FROM {$this->table_name} p JOIN \"user\" u on p.user_id = u.id 
                    LEFT JOIN post_like l ON l.post_id = p.id WHERE u.username = ? 
                    GROUP BY p.id, u.name, u.surname, u.username, p.content, p.created_at ORDER BY p.created_at DESC";
        $statement = $this->connection->prepare($query);
        $statement->bindParam(1, $username);
        $statement->execute();

        if ($statement->rowCount() != 0) {
            return $statement->fetchALL(PDO::FETCH_ASSOC);
        } else {
            return null;
        }
    }

    function create($content, $user_id): bool {
        $query = "INSERT INTO {$this->table_name} (content, user_id) VALUES (?, ?)";
        $st = $this->connection->prepare($query);

        $st->bindParam(1, $content);
        $st->bindParam(2, $user_id);

        if ($st->execute()) {
            return true;
        }
        return false;
    }

    function delete($id): bool {
        $query = "DELETE FROM {$this->table_name} WHERE id = ?";
        $st = $this->connection->prepare($query);


        $st->bindParam(1, $id);

        if ($st->execute()) {
            return true;
        }
        return false;
    }
}