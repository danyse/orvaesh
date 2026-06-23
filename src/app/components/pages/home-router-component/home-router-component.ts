import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { HomeViewComponent } from '../../home-view.component/home-view.component';
import { MobileHomeComponent } from '../../mobile/mobile-home.component/mobile-home.component';

@Component({
  selector: 'app-home-router-component',
  imports: [CommonModule, HomeViewComponent, MobileHomeComponent],
  templateUrl: './home-router-component.html',
  styleUrl: './home-router-component.scss',
})
export class HomeRouterComponent implements OnInit, OnDestroy {
  isMobile = false;

  private readonly mobileBreakpoint = '(max-width: 1200px)';
  private subscription?: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.breakpointObserver
      .observe([this.mobileBreakpoint])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}