import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  isChanged: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleChange() {
    this.isChanged = !this.isChanged;
  }
}
