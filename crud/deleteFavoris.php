<?php 

include "config.php";

$input = file_get_contents('php://input');
$message = array();
$id = $_GET['id_user'];
$id_detail = $_GET['id_userDetail'];

$request = mysqli_query($con, 
"DELETE FROM `schmit448u_findme`.`favoris`
 WHERE `favoris`.`id_user` = $id 
 AND  `favoris`.`id_user_favoris` = $id_detail "); 

if($request){
    http_response_code(201);
    $message['status'] = "Success";
    $message['contact'] = "supp de la BDD";
}else{
    http_response_code(422);
    $message['status'] = "Error";

}

echo json_encode($message);
echo mysqli_error($con);