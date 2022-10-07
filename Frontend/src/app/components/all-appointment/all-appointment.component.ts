import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment.model';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-all-appointment',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.css']
})
export class AllAppointmentComponent implements OnInit {

  appoinmentArray: Appointment[];
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAllAppointment().subscribe(data=>{
      this.appoinmentArray = data;
    });
  }

}
