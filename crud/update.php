<?php 

include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$id_user = ($data['id_user']);
$nom = $data['name'];
$prenom = $data['firstname'];
$ville = $data['town'];
$date_naiss = $data['birthdate'];

$nom_emploi = $data['jobName'];
$nom_entreprise = $data['society'];
$type_cont= $data['contract'];
$nom_emploi_rechercher = $data['job'];
$localisation = $data['location'];
$rayon = $data['milesAway'];
$disponibilite = $data['free'];

$presentation = $data['presentation'];
$activites = $data['activity'];
$text_societe = $data['about'];


$message['user'] = $id_user;
$message['nom'] = $nom;
$message['prenom'] = $prenom;
$message['ville'] = $ville;

$message['nom_emploi'] = $nom_emploi;
$message['nom_ent'] = $nom_entreprise;
$message['contrat'] = $type_cont;
$message['nom_emploi_rechercher'] = $nom_emploi_rechercher;
$message['localissation'] = $localisation;
$message['rayon'] = $rayon;
$message['dispo'] = $disponibilite;

$message['presentation'] = $presentation;
$message['activités'] = $activites;
$message['text'] = $text_societe;

$request = $db->query(
    "UPDATE desc_pers 
    SET nom = '$nom',
    prenom = '$prenom',
    ville = '$ville'
    WHERE id_user = $id_user ");

if($request){
    http_response_code(201);
    $message['status'] = "Success";
    $message['user'] = $data['id_user'];
}else{
    http_response_code(422);
    $message['status'] = "Error";
}



$request2 = $db->query(
    "UPDATE type_contrat 
    SET nom_emploi = '$nom_emploi',
    nom_entreprise = '$nom_entreprise',
    type_cont = '$type_cont',
    nom_emploi_rechercher = '$nom_emploi_rechercher',
    localisation = '$localisation',
    disponibilite = '$disponibilite'
    WHERE id_user = $id_user ");

if($request2){
    http_response_code(201);
    $message['status2'] = "Success";

}else{
    http_response_code(422);
    $message['status2'] = "Error";
}

$request3 = $db->query(
    "UPDATE profil 
    SET presentation = '$presentation' 
    ,activites =  '$activites' 
    ,text_societe = '$text_societe' 
    WHERE id_user = $id_user ");
    

if($request3){
    http_response_code(201);
    $message['status'] = "Success";
    $message['user'] = $data['id_user'];
}else{
    http_response_code(422);
    $message['status'] = "Error";
}





echo json_encode($message, JSON_UNESCAPED_UNICODE);
echo mysqli_error($con);