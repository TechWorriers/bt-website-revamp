import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tease',
  templateUrl: './tease.component.html',
  styleUrls: ['./tease.component.css']
})
export class TeaseComponent implements OnInit {
  @Input() headline: string;
  @Input() _editable: any;
  constructor() { }

  ngOnInit() {
  }

}
