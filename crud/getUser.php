<?php 
include "config.php";

$data = array();
$id_user = $_GET['id_user'];

$request = mysqli_query($con,
    "SELECT user_login.id_user, nom, prenom, ville, code_post,nom_emploi
    FROM user_login, desc_pers, type_contrat
    WHERE user_login.id_user = desc_pers.id_user
    AND user_login.id_user = type_contrat.id_user
    AND user_login.id_user != $id_user" 
);

while($row = mysqli_fetch_object($request)){
    $data[] = $row;
}

echo json_encode($data, JSON_UNESCAPED_UNICODE);
echo mysqli_error($con);

