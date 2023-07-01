import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/Reservation';
import { ReservationsServiceService } from '../reservations-service.service';

@Component({
  selector: 'app-last-reservations',
  templateUrl: './last-reservations.component.html',
  styleUrls: ['./last-reservations.component.css']
})
export class LastReservationsComponent implements OnInit{
  reservations: Reservation[];

  constructor(private reservationService: ReservationsServiceService){}

  ngOnInit(): void {
      // this.reservationService.getLastReservations()
      //   .subscribe({
      //     next: res => {
      //       this.reservations = res;
      //     }
      //   })
  }
}
