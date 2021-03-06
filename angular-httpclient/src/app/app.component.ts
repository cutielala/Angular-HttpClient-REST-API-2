import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Smartphone } from './smartphone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-httpclient';

  smartphone: Smartphone[] = [];
  headers: any;
  spresp: any;
  postdata!: Smartphone;

  constructor(private api: ApiService) {}
  ngOnInit() {
    this.getSmartphones();
  }
   // Get full response
  // getSmartphones(){
  //   this.api.getSmartphone()
  //     .subscribe(resp =>{
  //       console.log(resp);
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map((key: any) =>
  //         '${key}: ${resp.headers.get(key)}');

  //         for (const data of resp.body){
  //           this.smartphone.push(data);
  //         }
  //         console.log(this.smartphone);
        

  //     });
  //}
  getSmartphones() {
    this.api.getSmartphone()
      .subscribe(data => {
        for (const d of data) {
          this.smartphone.push(d);
        }
      });
  }
  
  
  getSmartphoneById(id: any){
    this.api.getSmartphoneById(id)
    .subscribe( data=>{
      console.log(data);
    });
  }
  addSmartphone(){
    this.api
    .addSmartphone(this.postdata)
    .subscribe(resp =>{
      return this.spresp.push(resp);
    }

    );
  }
  updateSmartphone(id: any) {
    this.api
      .updateSmartphone(id, this.postdata)
      .subscribe(resp => {
        return this.spresp.push(resp);
      });
   }
   deleteSmartphone(id: any){
     this.api
     .deleteSmartphone(id, this.postdata)
     .subscribe(resp =>{
      console.log("resp:"+id);
       return this.spresp.push(resp);
     }

     )
   }
  
  // getSmartphones(){
  //   this.api.getSmartphone()
  //   .subscribe(data => {
  //     for(const d of (data as any)){
  //       this.smartphone.push({
  //         name: d.name,
  //         price: d.price
  //       });
  //     }
  //     console.log(this.smartphone);
  //   });
  // }


}

