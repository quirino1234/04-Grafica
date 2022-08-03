import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  public lineChartData: Array<any> = [
    {data: [ 0, 0, 0, 0], label: "Ventas"}

  ];
  public lineChartLabels: Array<any>=['Enero', 'Febrero', 'Marzo', 'Abril']

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(){

    this.getData();
    /*setInterval( () => {

      const newData = [
        Math.round(  Math.random() * 100),
        Math.round(  Math.random() * 100),
        Math.round(  Math.random() * 100),
        Math.round(  Math.random() * 100)
      ];
    
    this.lineChartData = [
      { data: newData, label: 'Ventas'}
    ]

    }, 3000);*/

  }

  getData(){

    this.http.get( 'http://localhost:5000/grafica')
    .subscribe( (data: any) => this.lineChartData = data
      
    );
    
  }

}
