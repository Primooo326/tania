import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  config: any = {
    brandName: 'FUNIDEF EXPRÉSATE',
    subtitle: 'Corporación Fundaciones Unidas para el Desarrollo Familiar.',
    slogan: 'Actúa hoy, elige tú buen vivir.',
    logoUrl: 'assets/icons/LOGO%20FUNIDEF%20EXPRESATE%20SIN%20FONDO.png',
    instagramUrl: 'https://www.instagram.com/coachtaniatorres/',
    linkedinUrl: 'https://www.linkedin.com/in/tania-tatiana-torres-real-59082524a/',
    whatsappUrl: 'https://wa.me/573138703512'
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/config.json').subscribe({
      next: (data) => {
        this.config = data;
      },
      error: (err) => {
        console.error('Error loading config.json, using defaults', err);
      }
    });
  }

  goToSocialNetwork(socialMedia: string) {
    return (window.location.href = socialMedia);
  }
}
