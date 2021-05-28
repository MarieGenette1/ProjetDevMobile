<?php 

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$nom                = $data['name'];
$prenom             = $data['lastname'];
$email              = $data['email'];
$login_user         = $data['username'];
$password           = $data['matchingPasswords']['password'];


$request = mysqli_query($con,"INSERT INTO `schmit448u_findme`.`user_login` (`id_user`, `login_user`, `password`)
 VALUES (NULL, '$login_user', '$password'); ");

$q = mysqli_query($con, 
"INSERT INTO `schmit448u_findme`.`desc_pers` (`id_personne`, `nom`, `prenom`, `genre`, `tel`, `mail`, `date_naiss`, `ville`, `id_user`) 
VALUES (NULL, '$nom', '$prenom', NULL, NULL, '$email', NULL, NULL, (SELECT MAX(id_user) FROM user_login))");



if($request){
    http_response_code(201);
    $message['status'] = "Success";
    $message['userName'] = $login_user;


}else{
    http_response_code(422);
    $message['status'] = "Error envoie";
}

echo json_encode($message);
echo mysqli_error($con);
