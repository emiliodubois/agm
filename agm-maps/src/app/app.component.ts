import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  ngOnInit(): void {  
    setInterval(() => {
      this.move();
    },1000)
  }

  title = 'agm-maps';
  lat = -34.681;
  lng = -58.371;

  position = {
    lat: this.lat,
    lng: this.lng
  }

  label = {
    color: 'black',
    text: 'Holis'
  }

  move() {
    this.lat = this.lat - 0.0001;  
    
    this.position = {
      lat: this.lat,
      lng: this.lng
    }
    console.info(this.position);
  }


}

