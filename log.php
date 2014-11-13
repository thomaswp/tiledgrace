<?php
$data = file_get_contents("php://input");
$existing = file_get_contents("eventlog.results");
if ($data == "") {
	$data = "[]";
}
if ($existing == "null") {
	$existing = "[]";
}
$json1 = json_decode($existing, true);
$json2 = json_decode($data, true);
$json = array_merge($json1, $json2);
$fp = fopen("eventlog.results", "w");
//fwrite($fp, $data);
fwrite($fp, json_encode($json));
fclose($fp);
