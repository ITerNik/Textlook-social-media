<?php
require_once __DIR__ . "/../vendor/autoload.php";
use Firebase\JWT\JWT;

class JWTCoder {
    private $secret_key;

    function __construct() {
        $this->secret_key = getenv('SECRET_KEY');
    }
    function generateToken($username): string
    {
        $payload = [
            "username" => $username
        ];
        return JWT::encode($payload, $this->secret_key);
    }

    function decodeToken($token) {
        return JWT::decode($token, $this->secret_key, ['HS256']);
    }
}
