<?php

include '../db.php';

if (!array_key_exists("userID", $_GET) || !array_key_exists("conditionID", $_GET)) return;
$userID = $_GET["userID"];
$conditionID = $_GET["conditionID"];

$conn = connect();

$sql = "SELECT id FROM users WHERE users.userID = '$userID'";
$result = $conn->query($sql);
if (!$result) return;

if ($result->num_rows == 0) {
    $sql = "INSERT INTO users (userID, conditionID) VALUES('$userID', $conditionID)";
    $result = $conn->query($sql);
    if (!$result) return;
    echo $conn->insert_id;
} else {
    echo $result->fetch_array(MYSQL_NUM)[0];
}

$conn->close();

?>
