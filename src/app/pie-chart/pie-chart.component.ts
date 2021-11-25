import { AUTO_STYLE } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  myType:any = 'PieChart';
  myData = [
    ['PHP', 8136000],
    ['Node', 8538000],
    ['JQuery', 2244000],
    ['.Net', 3470000],
    ['Java', 19500000]
  ];
  
  width = 1170;
  height = 500;
  constructor() { }

  ngOnInit(): void {
  }

}
