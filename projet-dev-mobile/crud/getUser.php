<?php 
include "config.php";

$data = array();
$request = mysqli_query($con,"SELECT * FROM `schmit448u_findme`.`desc_pers`" );

while($row = mysqli_fetch_object($request)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);

