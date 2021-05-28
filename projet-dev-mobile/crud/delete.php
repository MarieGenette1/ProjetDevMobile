<?php 

include "config.php";

$input = file_get_contents('php://input');
$message = array();

$id = $_GET['id'];
$request = mysqli_query($con, "DELETE FROM `schmit448u_findme`.`user_login` WHERE `user_login`.`id_user` = {$id}  "); 

if($request){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";

}

echo json_encode($message);
echo mysqli_error($con);