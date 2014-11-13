<?php
$data = file_get_contents("php://input");
if ($data == "") {
	return;
}

$json = json_decode($data, true);
$table = $json["table"];
$userID = $json["userID"];
$time = $json["time"];
$type = $json["type"];
$data = json_encode($json["data"]);

$servername = "localhost";
$username = "grace";
$password = "rAbuguBeprA4";

$conn = new mysqli($servername, $username, $password);
if ($conn->connect_erro) {
	die("Connection failed");
}

$sql = "INSERT INTO $table (userID, time, type, data) VALUES($userID, $time, $type, $data)";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
