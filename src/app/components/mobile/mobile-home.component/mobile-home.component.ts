import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mobile-home',
  standalone: true,
  imports: [],
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.scss'
})
export class MobileHomeComponent implements AfterViewInit, OnDestroy {
  isMenuOpen = false;

  private observer?: IntersectionObserver;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.setBodyMenuState();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.setBodyMenuState();
  }

  private setBodyMenuState(): void {
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

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
    document.body.style.overflow = '';
  }
}
