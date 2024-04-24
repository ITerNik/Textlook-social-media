<?php
    class DatabaseManager {
        private $host = "localhost";
        private $port = 5432;
        private $user = "postgres";
        private $password = "admin";
        private $db_name = "textlook_media";

        public $connection = null;

        public function connect() {
            try {
                $this->connection = new PDO("pgsql:host={$this->host};dbname={$this->db_name};port={$this->port}",
                    $this->user, $this->password);
            } catch (PDOException $exception) {
                echo "Connection error: " . $exception->getMessage();
            }
            return $this->connection;
        }
    }