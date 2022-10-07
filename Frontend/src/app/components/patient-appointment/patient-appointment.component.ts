import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appointment } from 'src/app/model/appointment.model';
import { Doctor } from 'src/app/model/doctor.model';
import { Slot } from 'src/app/model/slot.model';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {

  doctorArry: Doctor[];
  slotsArry: Slot[];
  tempArry: Slot[];
  appointment: Appointment;
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAllDoctor().subscribe(data=>{
      this.doctorArry = data;
    });
    console.log(this.doctorArry);

    this.appointmentService.getAllSlots().subscribe(data=>{
      this.slotsArry = data;
      this.tempArry = this.slotsArry;
    });
  }
  onFormSubmit(patientForm: NgForm){
    confirm('You want to book Appointment for following day?');
    let appointment: Appointment={
      name: patientForm.value.name,
      contact: patientForm.value.contact,
      doctorId: patientForm.value.doctor,
      slotId: patientForm.value.slots,
      apptDate: patientForm.value.apptDate
    }
    this.appointmentService.bookAppointment(appointment).subscribe(data=>{
      this.appointment = data;
      
    });
  }
  doctorSelect(patientForm: NgForm){
    this.slotsArry = this.tempArry;
    console.log('doctor selected...' + patientForm.value.doctor);
    console.log(this.slotsArry)
    this.slotsArry = this.slotsArry.filter(s=>s.doctor.id == 
      patientForm.value.doctor)
  }

}
