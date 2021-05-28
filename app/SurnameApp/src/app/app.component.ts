import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SurnameApp';

  loading = false;

  results: any[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    layout: {
      padding: 10,


    },
    scales: {
      display: false,
      gridLines: {
        display: false
      },

      xAxes: [{
        display: false,
        gridLines: {
          display: false,
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
        },
      }]
    },
    defaultColor: '#00ad5f',
    legend: {
      display: false
    },
    

  };
  public barChartLabels: Label[] = ['Brazil', 'EUA', 'França', 'Outros'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '%', backgroundColor: '#00ad5f', hoverBackgroundColor: "#00ad5f" },
  ];
  search(name: string) {
    //this.loading = true;
    this.results.push(1)
  }
}
