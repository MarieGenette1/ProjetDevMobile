<?php 
include "config.php";

$data = array();
$id_user = $_GET['id_user'];
$request = mysqli_query($con,"SELECT id_user_favoris, nom , prenom 
                            FROM favoris, desc_pers, user_login WHERE favoris.id_user = $id_user 
                            AND favoris.id_user_favoris = user_login.id_user AND user_login.id_user = desc_pers.id_user" );

while($row = mysqli_fetch_object($request)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);

