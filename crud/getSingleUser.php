<?php 

include "config.php";

$data = array();
$id_user = $_GET['id_user'];
$request = mysqli_query($con, 
"SELECT user_login.id_user, nom, prenom,tel, mail, ville, date_naiss, nom_emploi, nom_entreprise, localisation, type_cont, disponibilite,rayon,  nom_emploi_rechercher, presentation, activites,text_societe
FROM user_login, desc_pers, type_contrat, profil
WHERE user_login.id_user = $id_user
AND user_login.id_user = desc_pers.id_user
AND user_login.id_user = type_contrat.id_user
AND user_login.id_user = profil.id_user");

while($row = mysqli_fetch_object($request)){
    $data[] = $row;
}
echo json_encode($data, JSON_UNESCAPED_UNICODE);
echo mysqli_error($con);