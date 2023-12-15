import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {


  nouvel = {
    nom: '',
    prenom: '',
    adresse: '',
    ville: '',
    etat: '',
    total: 0
  };

  etudiants: any[] = [];

  ajouterEtudiant() {
    this.etudiants.push({ ...this.nouvel });

    this.nouvel = {
      nom: '',
      prenom: '',
      adresse: '',
      ville: '',
      etat: '',
      total: 0
    };
  }
}
