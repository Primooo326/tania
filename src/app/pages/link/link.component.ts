import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  constructor() {}



  ngOnInit(): void {
    console.log('object3');
  }
  goToSocialNetwork(socialMedia: string) {
    return (window.location.href = socialMedia);
  }
}
