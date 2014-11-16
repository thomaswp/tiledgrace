<?php
$data = file_get_contents("php://input");
if ($data == "") {
	return;
}

$json = json_decode($data, true);
if (count($json) == 0) return;

$userID = $_GET["userID"];
if (!$userID) die ("No userID");

$servername = "localhost";
$username = "grace_user";
$password = "rAbuguBe";
$database = "grace";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_errno) {
	die("Connection failed");
}

$count = 0;
foreach ($json as $event) {
	$table = $event["table"];
	$time = mysql_real_escape_string($event["time"]);
	$type = mysql_real_escape_string($event["type"]);
	$data = array_key_exists("data", $event) ? mysql_real_escape_string(json_encode($event["data"])) : "";


	$sql = "INSERT INTO $table (userID, time, type, data) VALUES('$userID', $time, '$type', '$data')";
	if ($conn->query($sql) === TRUE) {
		$count++;
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
	}
}

$conn->close();

echo "Logged $count events.";
?>
