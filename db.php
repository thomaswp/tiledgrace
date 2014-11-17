<?php
function connect() {
    $servername = "localhost";
    $username = "grace_user";
    $password = "rAbuguBe";
    $database = "grace";

    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_errno) {
        die("Connection failed");
    }

    return $conn;
}
?>
