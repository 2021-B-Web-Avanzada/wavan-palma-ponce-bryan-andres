import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  @Input()
  trendingPhoto='http://pm1.narvii.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg'

  @Input()
  trendingSubr='null'

  @Input()
  trendingName = 'null'

  @Input()
  trendingDescription = 'null'

  @Input()
  trendingIcon = 'null'

  constructor() { }

  ngOnInit(): void {
  }

}
