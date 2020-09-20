import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['sagar', 'laxman', 'nimesh', 'vishal', 'nilam'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 90, 50,0], label: 'Remote'}
    // ,    {data: [28, 48, 40, 81], label: 'Visit'}
  ];

  public barChartOptions1 = {
    options: {
        title: {
          // display: true,
          // text: 'Example Chart'
        },
        scales: {
          xAxes: [{            
            // position: 'bottom',            
            // gridLines: {
            //   zeroLineColor: "rgba(0,255,0,1)"
            // },
            // scaleLabel: {
            //  display: true,
            //  labelString: 'yAxes axis'
            // },
            // stacked: true
          }],
          yAxes: [{
            // position: 'left',
            // gridLines: {
            //   zeroLineColor: "rgba(0,255,0,1)"
            // },
            // scaleLabel: {
            //   display: true,
            //   labelString: 'y axis'
            // }
          }]
        }
      }
    };
  public barChartLabels1 = ['0', '1', '2', '3', '4', '5', '6', '7'];
  public barChartType1 = 'line';
  public barChartLegend1 = true;
  // public barChartData1 = [
  //   { data: [65, 65], 
  //     label: 'Remote', 
  //     fill: false,
  //   },
  //   { data: [81, 81], label: 'Visit', fill: false },
  //   { data: [, ,70, 70], 
  //     fill: false,
  //   },
  //   { data: [81, 81], label: 'Visit', fill: false }
  // ];

}

