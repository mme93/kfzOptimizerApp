import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaradminastrionService {

  public list: Array<Object> = [];

  constructor(private http: HttpClient) { 
    
  }

  saveCar(tuev:string,kennzeichen:string,halter:string,fin:string):Observable<String>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+localStorage.getItem("token")})
      }
     return this.http.post<String>('https://kfzoptimizerservice.herokuapp.com/car/save', JSON.stringify(new Car(tuev,kennzeichen,halter,fin,null,null)),httpOptions);
  }

  loadCarByMark(mark:string):Observable<Car>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+localStorage.getItem("token")})
    }
   return  this.http.post<Car>('https://kfzoptimizerservice.herokuapp.com/car/load', JSON.stringify(new CarMark(mark)),httpOptions);
  }
  
  loadCars(){
    this.list = [
      { title: "MH-WD-200" },
      { title: "E-DM-1" },
      { title: "MH-DD-132" },
      { title: "GE-XX-123" },
      { title: "E-DA-144" },
      { title: "MH-XL-5" }
    ];
    return this.list;
  }

}
class CarMark{
  mark:string;
  constructor(mark:string){
    this.mark=mark;
  }
}
class Car{
  fin:string;
  kennzeichen:string;
  verbrenner:string;
  tuev:string;
  service:string;
  halter:string;
  constructor(tuev:string,kennzeichen:string,halter:string,fin:string,service:string,verbrenner:string){
      this.fin=fin;
      this.kennzeichen=kennzeichen;
      this.tuev=tuev;
      this.halter=halter;

      this.service=service;
      this.verbrenner=verbrenner;
    }

}