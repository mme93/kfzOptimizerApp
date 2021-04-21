import { Component,  ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CreateDatePage } from '../create-date/create-date.page';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage {

  eventSource=[];
  viewTitle:string;

  calendar ={
    mode:'month',
    currentDate:new Date(),
  };
  
  @ViewChild(CalendarComponent) myCal:CalendarComponent;

  constructor(private modalCtrl:ModalController) {}
  //Zum nächsten Seite
  next(){
    this.myCal.slideNext();
  }
  //Zur vorhärigen Seite
  back(){
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title:string){
    this.viewTitle =title;
  }
  async openCreateEventModel(){
    const modal = await this.modalCtrl.create({
      component: CreateDatePage,
      backdropDismiss: false
    });
    await modal.present();
  }
  createEvent(){
    let event =
	{
		id: 20,
		title: 'Eventa - New',
		startTime: new Date('2021-04-27 14:00:00'),
		endTime: new Date('2021-04-27 14:30:00'),
		allDay: false
	};
	let events = this.eventSource;
	events.push(event);

	this.eventSource = [];
	setTimeout(() => {
		this.eventSource = events;
	});
  }
}