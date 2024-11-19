import { Component } from '@angular/core';

@Component({
  selector: 'app-famous-places',
  templateUrl: './famous-places.component.html',
  styleUrls: ['./famous-places.component.css']
})
export class FamousPlacesComponent {
  places = [
    {
      name: 'Eminönü',
      image: 'assets/eminonu.jpg',
      description: 'A lively neighborhood near the Bosphorus with famous markets.',
      history: 'Eminönü is a bustling district near the Bosphorus, famous for its lively markets and historical landmarks. It is a gateway to many of Istanbul’s most iconic sites.'
    },
    {
      name: 'Galata Tower',
      image: 'assets/galata.jpg',
      description: 'A historic tower offering a stunning view of Istanbul.',
      history: 'The Galata Tower is one of Istanbul’s most iconic landmarks. Built in the 14th century, it offers panoramic views of the city and the Bosphorus.'
    },
    {
      name: 'Hagia Sophia',
      image: 'assets/hagia.jpg',
      description: 'An iconic monument with rich history.',
      history: 'Hagia Sophia is an architectural masterpiece that has served as a church, mosque, and museum. Its rich history spans over 1,400 years.'
    },
    {
      name: 'Grand Bazaar',
      description: 'L’un des plus grands et anciens marchés couverts du monde, un lieu incontournable à Istanbul.',
      image: 'assets/grandbazar.jpg',  // Assurez-vous d'avoir l'image pour Grand Bazaar dans le dossier assets
      history: 'Le Grand Bazaar d’Istanbul, fondé au 15e siècle, abrite des milliers de boutiques et est un véritable centre commercial historique.',
    },
    {
      name: 'Misir Pazar',
      description: 'Le plus grand marché des épices d’Istanbul, rempli de couleurs et d’arômes exotiques.',
      image: 'assets/misir.jpg',
      history: 'Construit au 17ème siècle, il offre une expérience unique avec des épices du monde entier.',
    },
    {
      name: 'Dolmabahce Palace',
      description: 'Un palais majestueux sur le Bosphore, symbole de l’empire Ottoman.',
      image: 'assets/dolma.jpg',
      history: 'Ce palais a été la résidence des sultans ottomans à partir du 19ème siècle.',
    },
    {
      name: 'Topkapi Palace',
      description: 'Un palais somptueux qui a abrité les sultans ottomans pendant plus de 400 ans.',
      image: 'assets/topkapi.jpg',
      history: 'Le Topkapi Palace est aujourd\'hui un musée qui présente les trésors et artefacts de l\'Empire Ottoman.',
    },
    {
      name: 'Bosphorus Bridge',
      description: 'Un des ponts les plus célèbres d’Istanbul, reliant les continents européen et asiatique.',
      image: 'assets/bosfor.jpg',
      history: 'Construit en 1973, ce pont est un symbole moderne d’Istanbul qui relie les rives européennes et asiatiques de la ville.',
    },
    {
      name: 'Blue Mosque',
      image: 'assets/blue-mosque.jpg',
      description: 'A historic mosque with fascinating architecture.',
      history: 'The Blue Mosque, or Sultan Ahmed Mosque, is famous for its blue tiles and grand architecture. It was built in the early 17th century.'
    }
  ];

  selectedPlace: any;

  openModal(place: any) {
    this.selectedPlace = place;
  }

  closeModal() {
    this.selectedPlace = null;
  }
}
