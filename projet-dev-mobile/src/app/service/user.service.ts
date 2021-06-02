import { Injectable } from '@angular/core';

interface User {
  id: string;
  name: string;
  likedBy: boolean;
  description: string;
  activity: string;
  society: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = [];

  constructor() {

    // Set some test
    this.users = [
      {
        id: 'One',
        name: 'Beaugosse Alex',
        likedBy: true,
        description:'Je suis le boss de la classe des AS, rien ni personne ne me résiste et surtout pas Nathalie!',
        activity:  'Je suis le roi de la BDD et des requêtes SQL par palettes entieres avec mon ami Laravel et ses API de' +
          'malade, on dechire tout!',
        society: 'une start-up en pleine expansion, des serveurs remplis de trilliards de tera octets de donnees, tout va bieng!'
      },
      {
        id: 'Two',
        name: 'Codeur Cédric',
        likedBy: true,
        description:  'Je suis Cédric codeur, le roi de la blockchain!',
        activity:'Je suis le roi de la spéculation sur les bitcoin et je préfère miner que de me faire suer avec les maths de Ginoux!',
        society: 'Une société offshore en préparation au Portugal, la flat tax il peuvent se la mettre où je pense!!'
      },
      {
        id: 'Three',
        name: 'Monkey Guy',
        likedBy: true,
        description: 'I am the guy who is writing all this shit!',
        activity: 'Temps plein codage en tout genre et autres activitéss plus pénibles à prévoir sous peu...',
        society: 'Peut être un jour, quand je me dirais: "C qui le patron?"',
      },
      {
        id: 'Four',
        name: 'Benjamine Derien',
        likedBy: false,
        description: 'Un mec qui vit dans son petit monde...',
        activity: 'plutôt du genre inactif, en tout cas le projet, C nous qui avons géré!!',
        society: 'si branleur était une activité lucrative, il serait le plus riche!'
      },
      {
        id: 'Five',
        name: 'Mary Atoutprix',
        likedBy: true,
        description: 'Une fille qui ne veut pas laisser les ordinateurs uniquement à la gente masculine!',
        activity: 'Distribue des plans de basilic pourpre sous le manteau à ses camarades de classe et certains pensent que ça se fume',
        // eslint-disable-next-line max-len
        society: 'Mon dada est le réseau, je vais câbler la France entière car on est encore à la préhistoire dans ce pays avec à peine du Edge dans certaines certaines zones!'
      },
      {
        id: 'Six',
        name: 'Tata Kahina',
        likedBy: true,
        description: 'La reine du Java, aucun controleur,struts ou autre Spring ne peut lui résister, elle les a tous matés!',
        // eslint-disable-next-line max-len
        activity: 'Elle va nous sortir prochainement la nouvelle Texas instrument de la mort qui tue, aucun parenthésage à la con ne se mettra en travers du chemin!',
        society: 'calculator sera la calculatrice de demain que tout les collégiens auront dans leur cartables!'
      },
      { id: 'Seven',
        name: 'Zorro Estarrivé',
        likedBy: false,
        description: 'Bon la je suis au dernier et à cours de nouvelles idées, on a testé, ça fonctionne!',
        activity: 'Superhéros préféré de notre roi de la requête SQL, avec sa bande de copains pirates des sept mers',
        society: 'One piece of cake, comme le dit le dicton: C du gâteau!'
      }
    ];
  }

  getUser(id): User{
    return this.users.find(user => user.id === id);
  }

}
