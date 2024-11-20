import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  activities = [
    { 
      name: 'Zipline', 
      price: 250, 
      image: '/assets/zipline.webp' 
    },
    { 
      name: 'Squad Ride', 
      price: 700, 
      image: '/assets/squad.png' 
    },
    { 
      name: 'Glass Terrace in Sapanca', 
      price: 200, 
      image: '/assets/glass.jpeg' 
    },
    { 
      name: 'Teleferic (Cable Car)', 
      price: 500, 
      image: '/assets/telefric.jpg' 
    },
    { 
      name: 'Boat Ride', 
      price: 350, 
      image: '/assets/boat.jpg' 
    },
    { 
      name: 'Horse Riding', 
      price: 400, 
      image: '/assets/horse.jpg' 
    }
  ];
}
