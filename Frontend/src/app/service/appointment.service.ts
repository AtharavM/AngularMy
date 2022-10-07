import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';
import { Doctor } from '../model/doctor.model';
import { Slot } from '../model/slot.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  bookAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>('http://localhost:6567/book/appointment', appointment);
  }
  getAllDoctor() : Observable<Doctor[]>{
    return this.http.get<Doctor[]>('http://localhost:6567/get/all/doctor');
  }

  getAllSlots() :Observable<Slot[]>{
    return this.http.get<Slot[]>('http://localhost:6567/get/all/slots');
  }
  getAllAppointment(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>('http://localhost:6567/get/all/appointment');
  }
}
