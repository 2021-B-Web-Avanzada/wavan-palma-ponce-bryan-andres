import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  @Input()
  index=-1

  @Input()
  topPhoto='null'

  @Input()
  topName = 'Holaaaaaaaa'

  @Input()
  rising=true

  constructor() { }

  ngOnInit(): void {
  }

}
