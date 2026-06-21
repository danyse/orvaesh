import { Component,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-mobile-home.component',
  imports: [],
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.scss',
})
export class MobileHomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    const sections = document.querySelectorAll('.fade-section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }

        });
      },
      {
        threshold: 0.15
      }
    );

    sections.forEach(section => observer.observe(section));
  }
}
