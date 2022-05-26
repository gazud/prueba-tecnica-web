<?php

require_once('../config/connection.php');

if (isset($_POST['name']) || isset($_POST['pais']) || isset($_POST['phone']) || isset($_POST['email'])) {

    $name = $_POST['name'];
    $pais = $_POST['pais'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $sql = $conn->prepare("INSERT INTO `datos_contacto`(`nombre`, `pais`, `telefono`, `email`) 
    VALUES ('$name','$pais','$phone','$email')");
    $sql->execute();

    echo "Registrado...";
}else{
    echo "Error al registrar...";
}
