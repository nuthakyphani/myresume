import { Component, ElementRef, HostBinding, HostListener, OnInit,
  QueryList, ViewChild, ViewChildren, ViewEncapsulation,
  AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  navbarOpen = false;

  constructor(private router: Router) {
  }

  isActive(instruction: any[]): boolean {
    return this.router.isActive(this.router.url, true);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
