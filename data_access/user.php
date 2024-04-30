<?php

class UserDAO {
    private $connection;
    private $table_name = "\"user\"";

    function __construct($connection) {
        $this->connection = $connection;
    }

    function register($username, $password, $name, $surname): bool {
        $query = "INSERT INTO {$this->table_name} (username, password, name, surname) VALUES (?, ?, ?, ?)";
        $statement = $this->connection->prepare($query);

        $statement->bindParam(1, $username);
        $password_hash = password_hash($password, PASSWORD_DEFAULT);
        $statement->bindParam(2, $password_hash);
        $statement->bindParam(3, $name);
        $statement->bindParam(4, $surname);

        if ($statement->execute()) {
            return true;
        }
        return false;
    }

    function getIdByUsername($username) {
        $query = "SELECT id FROM {$this->table_name} WHERE username = ?";
        $statement = $this->connection->prepare($query);
        $statement->bindParam(1, $username);
        $statement->execute();

        $result = $statement->fetch(PDO::FETCH_ASSOC);
        return $result["id"];
    }

    function checkUserExist($username): bool {
        $query = "SELECT * FROM {$this->table_name} u WHERE u.username = ? LIMIT 1";
        $st = $this->connection->prepare($query);
        $st->bindParam(1, $username);
        $st->execute();

        return $st->rowCount() != 0;
    }

    function login($username, $password): bool {
        $query = "SELECT * FROM {$this->table_name} WHERE username = ? LIMIT 1";
        $st = $this->connection->prepare($query);
        $st->bindParam(1, $username);

        $st->execute();
        if ($st->rowCount() != 0) {
            $user = $st->fetch(PDO::FETCH_ASSOC);
            if (password_verify($password, $user["password"])) {
                return true;
            }
        }
        return false;
    }
}
