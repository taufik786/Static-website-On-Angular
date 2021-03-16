import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showme: boolean=false;
  constructor() { }

  ngOnInit(): void {

  }
  // toServices(){
  //   document.getElementById('services').scrollIntoView({behavior: 'smooth'});
  // }
  // toClients(){
  //   document.getElementById('clients').scrollIntoView({behavior: 'smooth'});
  // }
  // toAbout(){
  //   document.getElementById('about').scrollIntoView({behavior: 'smooth'});
  // }

  toggleNavbar(){
    // this.showme=!this.showme;
    // document.querySelector('ul').style.display= 'block'
  }
}
