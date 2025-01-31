import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-archive-header',
  templateUrl: './archive-header.component.html',
  styleUrls: ['./archive-header.component.css'],
  standalone: true,
})
export class ArchiveHeaderComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px', // Trigger früher
        }
      );

      document.querySelectorAll('.scroll-animate').forEach((el) => {
        observer.observe(el);
      });
    }
  }
}