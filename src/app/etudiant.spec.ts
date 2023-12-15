import { Etudiant } from './etudiant';

describe('Etudiant', () => {
  it('should create an instance', () => {
    const etudiant = new Etudiant(
      'Client 1',
      'Adresse 1',
      '123456789',
      'Info 1',
      1000
    );
    expect(etudiant).toBeTruthy();
  });
});
