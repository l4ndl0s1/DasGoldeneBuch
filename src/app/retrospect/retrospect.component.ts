import {
  Component,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-retrospect',
  standalone: false,

  templateUrl: './retrospect.component.html',
  styleUrl: './retrospect.component.css',
})
export class RetrospectComponent implements OnInit, AfterViewInit {
  event = {
    title: 'Retrospektive 2024',
    date: '8.12.2024',
  };

  eventImages = [
    {
      url: 'Images/memories/be_1.jpeg',
      alt: 'Befreiende Evas',
      description: 'Befreiende Evas',
    },
    {
      url: 'Images/memories/be_2.jpeg',
      alt: 'Befreiende Evas',
      description: 'Befreiende Evas',
    },
    {
      url: 'Images/memories/dgb_1.png',
      alt: 'Das Goldene Buch',
      description: 'Das Goldene Buch',
    },
    {
      url: 'Images/memories/dgb_2.png',
      alt: 'Das Goldene Buch',
      description: 'Das Goldene Buch',
    },
    {
      url: 'Images/memories/dgb_3.png',
      alt: 'Das Goldene Buch',
      description: 'Das Goldene Buch',
    },
    {
      url: 'Images/memories/dgb_4.jpg',
      alt: 'Event 6',
      description: 'Das Goldene Buch',
    },
    {
      url: 'Images/foto.jpg',
      alt: 'Event 7',
      description: 'Das Goldene Buch',
    },
  ];
  protected Math = Math;
  private isBrowser: boolean;
  protected randomData: { rotate: number; left: number; top: number }[] = [];
  selectedImage: any = null;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getRandomPosition(min: number, max: number): number {
    if (this.isBrowser) {
      return Math.random() * (max - min) + min;
    }
    return min; // Fallback für SSR
  }

  handleImageError(event: any) {
    const imgElement = event.target;
    imgElement.src = 'Images/fallback.png';
  }

  openFullscreen(image: any) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeFullscreen() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.eventImages.forEach((image) => {
        const img = new Image();
        img.src = image.url;
      });
    }
  }

  ngOnInit() {
    this.eventImages.forEach(() => {
      const rotate = this.isBrowser ? Math.random() * 16 - 8 : 0;
      const left = this.getRandomPosition(20, 60);
      const top = this.getRandomPosition(20, 60);
      this.randomData.push({ rotate, left, top });
    });
  }
}
