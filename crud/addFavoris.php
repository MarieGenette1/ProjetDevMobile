<?php 
include "config.php";
$dataContact =  0;
$message = array();
$id_user = $_GET['id_user'];
$id_userDetail = $_GET['id_userDetail'];

$req = $db->prepare("SELECT * FROM `schmit448u_findme`.`favoris` WHERE id_user = ? " );
$req->execute(array($id_user));

while($data = $req->fetch()){
    if($data['id_user_favoris'] == $id_userDetail){
        $dataContact ++;
    }
}

if($dataContact == 0){
    $request = mysqli_query($con,
    "INSERT INTO `schmit448u_findme`.`favoris` (`id_favoris`, `id_user`, `id_user_favoris`)
    VALUES (NULL, '$id_user', '$id_userDetail'); ");
    $message['message'] = "Cette personne a été ajouté à vos favoris";
    
}else{
    $message['message'] = "insertion impossible : cette personne est déjà ajouté dans vos favoris";
}

echo json_encode($message, JSON_UNESCAPED_UNICODE);
echo mysqli_error($con);
