
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ClientComponent } from './client.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<ClientComponent>;
  let component: ClientComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
  });

  it('devrait ajouter un nouvel étudiant à la liste', () => {
    const nouvel = {
      nom: 'yassine',
      prenom: 'meddeb',
      adresse: '123',
      ville: 'tunis',
      etat: 'aze',
      total: 500
    };

    component.nouvel = { ...nouvel };
    component.ajouterEtudiant();

    expect(component.etudiants.length).toBe(1);
    expect(component.etudiants[0]).toEqual(nouvel);
  });

 

});
