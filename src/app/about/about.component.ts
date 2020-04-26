import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public birthdate: Date;
  public age: number;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  public CalculateAge(): number {
    this.birthdate = new Date(1983, 3, 19);
    let timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    // Used Math.floor instead of Math.ceil
    // so 26 years and 140 days would be considered as 26, not 27.
    return this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
}
