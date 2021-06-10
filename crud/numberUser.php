<?php 
include "config.php";

$data = array();
$id_user = $_GET['id_user'];

$request = mysqli_query($con,
"SELECT COUNT(*) as numberUser 
FROM `schmit448u_findme`.`desc_pers`
WHERE id_user != $id_user ");

while($row = mysqli_fetch_object($request)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);

