<?php 
include "config.php";
$dataContact =  0;
$message = array();
$id_user = $_GET['id_user'];
$id_userDetail = $_GET['id_userDetail'];

$req = $db->prepare("SELECT * FROM `schmit448u_findme`.`contact` WHERE id_emetteur = ? " );
$req->execute(array($id_user));

while($data = $req->fetch()){
    if($data['id_recepteur'] == $id_userDetail){
        $dataContact ++;
    }
}

if($dataContact == 0){
    $request = mysqli_query($con,
    "INSERT INTO `schmit448u_findme`.`contact` (`id_contact`, `id_emetteur`, `id_recepteur`)
    VALUES (NULL, '$id_user', '$id_userDetail'); ");
    $message['message'] = "Cette personne a été ajouté à vos contact";
    
}else{
    $message['message'] = "insertion impossible : cette personne est déjà ajouté dans vos contact";
}

echo json_encode($message, JSON_UNESCAPED_UNICODE);
echo mysqli_error($con);
