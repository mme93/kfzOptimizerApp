import { Component, OnInit,ViewChild } from '@angular/core';
import { CaradminastrionService } from '../webService/caradminastrion.service';
import { IonSearchbar } from '@ionic/angular';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;

  public list: Array<Object> = [];
  private searchedItem: any;

  constructor(private service:CaradminastrionService) {
    this.list = service.loadCars();
    this.searchedItem = this.list
  }


  ngOnInit() {
  }
  loadCar(mark:string){
    document.getElementById("resultID").style.visibility = "visible"; 
    if(this.validateKennzeichen(mark)){
      this.service.loadCarByMark(mark).subscribe(response =>{
        
        if(response.kennzeichen != 'NOT FOUND'){
          console.log(response.kennzeichen)
        }else{
          console.log(response.kennzeichen)
        }
      });
    }
    
  }
  updateCar(tuev:string,kennzeichen:string,halter:string,fin:string){
    
    if(this.validateKennzeichen(kennzeichen)&&this.validateFIN(fin)){
        console.log(kennzeichen+" | "+tuev+" | "+halter+" | "+fin)
    }
  }

  postCar(tuev:string,kennzeichen:string,halter:string,fin:string){
    if(this.validateKennzeichen(kennzeichen)&&this.validateFIN(fin)){   
      this.service.saveCar(tuev,kennzeichen,halter,fin).subscribe(
        response=>{
          console.log(response);          
        }); 
      }
  }

  //STRING-STRING-ZAHLEN
  private validateKennzeichen(kennzeichen:string):boolean{
    return true;
  }
  private validateFIN(fin:string):boolean{
    return true;
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    });
  }
  //Beim eingeben der Daten, wird die Liste gefiltert
  _ionChange(event:any) {
    const val = event.target.value;
    this.searchedItem = this.list;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}