<?php

require_once 'config.php';

$host = constant('DB_HOST');
$user = constant('DB_USERNAME');
$pass = constant('DB_PASSWORD');
$db = constant('DB_NAME');

try {
    //code...
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
} catch (PDOException $e) {
    //throw $th;
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}