import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about-header',
  standalone: false,

  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.css',
})
export class AboutHeaderComponent implements AfterViewInit {
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
