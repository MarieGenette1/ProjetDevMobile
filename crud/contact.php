<?php 
include "config.php";

$data = array();
$id_user = $_GET['id_user'];

$request = mysqli_query($con,"SELECT id_recepteur, nom , prenom 
                            FROM contact, desc_pers, user_login WHERE id_emetteur = $id_user
                            AND contact.id_recepteur = user_login.id_user AND user_login.id_user = desc_pers.id_user" );

while($row = mysqli_fetch_object($request)){
    $data[] = $row;
}

echo json_encode($data, JSON_UNESCAPED_UNICODE);
echo mysqli_error($con);

