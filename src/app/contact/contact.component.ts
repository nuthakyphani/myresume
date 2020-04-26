import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public currentYear: number;

  constructor() { }

  ngOnInit() {
  }
  public current_year(): number {
    this.currentYear = new Date().getUTCFullYear();
    return this.currentYear;
  }
}
