import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  socialMedia = [
    'https://www.instagram.com/coachtaniatorres/',
    'https://www.linkedin.com/in/tania-tatiana-torres-real-59082524a/',
    'https://wa.me/573138703512',
  ];

  ngOnInit(): void {
    console.log('object');
  }
  goToSocialNetwork(socialMedia: string) {
    return (window.location.href = socialMedia);
  }
}
