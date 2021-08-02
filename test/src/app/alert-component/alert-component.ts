import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert-component.html',
  styleUrls: ['./alert-component.scss'],
  template: '<h1>Alert {{type}}</h1>'
})
export class AlertComponent implements OnInit {

  constructor() { }

  @Input() type: string = "success";

  ngOnInit() {

  }

}
