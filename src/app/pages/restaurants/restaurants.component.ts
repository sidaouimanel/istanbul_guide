import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants = [
    { 
      name: 'Mikla Restaurant', 
      address: 'The Marmara Pera, Meşrutiyet Caddesi, 34430 Istanbul, Turkey',
      image: 'assets/Mika.jpg',  // Image locale dans assets
      googleMapsLink: 'https://www.google.com/maps?q=Mikla+Restaurant,+Istanbul,+Turkey'
    },
    { 
      name: 'Nusr-Et Steakhouse', 
      address: 'Kanyon AVM, Levent, 34330 Istanbul, Turkey',
      image: 'assets/nusr.jpg',  // Image locale dans assets
      googleMapsLink: 'https://www.google.com/maps?q=Nusr-Et+Steakhouse,+Istanbul,+Turkey'
    },
    { 
      name: '360 Istanbul', 
      address: 'İstiklal Cd. No:163, 34433 Beyoğlu/Istanbul, Turkey',
      image: 'assets/360.jpg',  // Image locale dans assets
      googleMapsLink: 'https://www.google.com/maps?q=360+Istanbul,+Istanbul,+Turkey'
    },
    { 
      name: 'Banyan Restaurant', 
      address: 'Ortaköy Mh, Yıldız Caddesi No:3, 34347 Beşiktaş, Istanbul, Turkey',
      image: 'assets/banyan.jpg',  // Image locale dans assets
      googleMapsLink: 'https://www.google.com/maps?q=Banyan+Restaurant,+Istanbul,+Turkey'
    },
    { 
      name: 'Ulus 29', 
      address: 'Ahmet Adnan Saygun Caddesi No:10, Ulus, 34340 Beşiktaş, Istanbul, Turkey',
      image: 'assets/Ulus29.jpg',  // Image locale dans assets (corrected)
      googleMapsLink: 'https://www.google.com/maps?q=Ulus+29,+Istanbul,+Turkey'
    },
   { name: 'Sunset Grill & Bar', 
    address: 'Yalıkavak, Palmarina, 48430 Bodrum, Turkey',
    image: 'assets/sunset.jpg',  // Ajout d'une nouvelle image pour Sunset Grill
    googleMapsLink: 'https://www.google.com/maps?q=Sunset+Grill+%26+Bar,+Bodrum,+Turkey'
  },
  { 
    name: 'Karaköy Lokantası', 
    address: 'Kemankeş Karamustafa Paşa, 34425 Beyoğlu/Istanbul, Turkey',
    image: 'assets/karakoy.jpg', 
    googleMapsLink: 'https://www.google.com/maps?q=Karaköy+Lokantası,+Istanbul,+Turkey'
  },
  { 
    name: 'Çiya Sofrası', 
    address: 'Güney Mahallesi, 34730 Kadıköy/Istanbul, Turkey',
    image: 'assets/ciyasofrasi.jpg', // Ajoutez ici une image pour Çiya Sofrası
    googleMapsLink: 'https://www.google.com/maps?q=Çiya+Sofrası,+Istanbul,+Turkey'
  }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
