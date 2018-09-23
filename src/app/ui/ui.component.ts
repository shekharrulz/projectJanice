import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  today: number = Date.now();
  toggle = true;
  status = 'ON';
  gaugeType = "arch";
  gaugeValue = 5;
  gaugeLabel = "Current";
  gaugeAppendText = "V"; 

  constructor() {
    setInterval(() => {
      this.today = Date.now();
    }, 1000)
  }

  ngOnInit() {}

  enableDisableRule(){
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'ON' : 'OFF';
  }
}