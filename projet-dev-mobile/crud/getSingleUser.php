<?php 

include "config.php";

$data = array();
$id = $_GET['id'];
$request = mysqli_query($con, "SELECT * FROM login_user WHERE id_user = $id LIMIT 1 ");

while($row = mysqli_fetch_object($request)){
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);