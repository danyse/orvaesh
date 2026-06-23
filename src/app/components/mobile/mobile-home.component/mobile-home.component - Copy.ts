import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mobile-home',
  standalone: true,
  imports: [],
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.scss'
})
export class MobileHomeComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('.fade-section');

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    sections.forEach(section => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}