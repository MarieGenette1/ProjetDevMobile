<?php 
include "config.php";


$input = file_get_contents('php://input');
$data = json_decode($input, true);


$login_user         = $data['username'];
$password           = $data['password'];
$message = array();

$req = $db->prepare("SELECT * FROM `schmit448u_findme`.`user_login` WHERE login_user = ? " );
$req->execute(array($login_user));

while($data = $req->fetch()){
    if($data['password'] == $password){
        $message['status'] = "Success";
        $message['userName'] = $login_user;
        $message['password'] = $password;
        $message['id_user'] = $data['id_user'];



    }else{
        $message['status'] = "Error";
        $message['Error'] = "Les identifants données sont faux";
    }
}

echo json_encode($message, JSON_UNESCAPED_UNICODE);
echo mysqli_error($con);
