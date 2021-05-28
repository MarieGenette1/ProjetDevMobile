<?php 
include "config.php";

$data = array();
$request = mysqli_query($con,"SELECT id_user_favoris, nom , prenom 
                            FROM favoris, desc_pers, user_login WHERE favoris.id_user = '2' 
                            AND favoris.id_user_favoris = user_login.id_user AND user_login.id_user = desc_pers.id_user" );

while($row = mysqli_fetch_object($request)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);

