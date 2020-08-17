<?php
$user="localhost";
$localname="root";
$pass="";
$dbname="amiss_db";

$con = mysqli_connect($user,$localname,$pass,$dbname);
if (!$con) {
 die ("connection not successfull".mysqli_connect_error());
}

 ?>