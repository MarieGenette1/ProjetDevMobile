<?php 

include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$user_login = $data['user_login'];
$password   = $data['password'];
$id = $_GET['id_user'];

$request = mysqli_query($con, "UPDATE login_user SET (user_login, password) VALUES ($user_login, $password) WHERE id_user = {$id} LIMIT 1 ");


if($request){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);