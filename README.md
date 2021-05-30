# ProjetDevMobile
repository du projet de dev mobile
Les changements apportés sur la main branch sont:
respect structure ionic header/content sur toutes les pages ;)
Dans le dossier "theme", le fichier variables.scss a été édité pour remplacer par défaut la couleur bleu "primary" par #00a3d9 (celle du projet),
maintenant le color="primary" fonctionne directement dans l'html sans besoin de css supplémentaire. j'ai gardé la couleur originale en commentaire.
Dans l'onglet tab5, les checkbox ont été revues pour pouvoir afficher en entier le oui/non et elles se placent à droite de l'écran si on aggrandit.
Le formulaire d'inscription a été finalisé avec FormControl de façon à pouvoir checker les saisies de l'utilisateur email/username et password/confirmation.
Un dossier validators contient des fonctions pour l'identifiant et la concordance du mot de passe. L'ordre des champs a été vu avec Alex.


Le formulaire des profils vient d'être finalisé et a bien grossi, le fichier tab5.page.html fait presque 300 lignes de code et 140 lignes pour le fichier tab5.page.ts, alors quoi de neuf?

Formulaire Angular de type réactif comme celui que j'avais fait pour le formulaire d'inscription avec vérification des entrées saisies par l'utilisateur, désactivation par défaut des champs concernant les parties recherche d'emploi et de logement car la checkbox est validée à non.
Les messages destinés à l'utilisateur sont aussi désactivés si les input sont "disabled"
De plus le formulaire ne peut être validé que si toutes les conditions requises sont remplies.

En cliquant sur oui dans la checkbox, les input deviennent fonctionnels et j'ai rajouté une option pour effacer leur contenu si l'utilisateur change d'avis(croix à droite de l'input).
J'ai aussi prévu que des petits malins essayeraient le Non/Oui en série pour tester et prendre en défaut la validation, le formulaire ne peut être validé que si le oui est sélectionné sur les deux questions et tous les champs remplis correctement, il y a une triple vérification avant validation du formulaire.
Pour la date de naissance, j'ai mis une balise "ion-datetime", c'est une roue au lieu du calendrier donc plus pratique et la date sera aussi forcément correcte.
J'ai laissé nom et prénom en clair si on peut les afficher par défaut avec la BDD quand l'utilisateur et connecté.

Maintenant la mauvaise nouvelle, après avoir testé différentes possibilités, on ne peut que valider le formulaire s'il est intégralement renseigné. j'ai tenté de pouvoir faire en sorte que chaque question soit individuelle car une personne cherchant un emploi, ne cherche pas forcément un logement, malheureusement ce n'est possible que pour remplir le formulaire car chaque checkbox est individualisée, par contre il n'y a qu'un seul bouton pour valider les saisies. Donc si je vérifie les entrées et interdit de valider un formulaire mal renseigné, cela concerne aussi un remplissage partiel.
J'ai même essayé un double formulaire imbriqué pour chaque question, sans succès. Si je désactive le check des saisies, en activant la checkbox sur oui, on active aussi la validation d'un formulaire vide...
Pour finir, Alex je t'ai fait un tableau avec les 16 valeurs en sortie pour la BDD, désolé pour le pavé de lecture, je m'entraine pour PPP :p
