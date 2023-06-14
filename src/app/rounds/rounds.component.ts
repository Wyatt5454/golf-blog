import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundsService } from '../rounds.service';

@Component({
  selector: 'app-rounds',
  templateUrl: 'rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  rounds: any[] = [];

  constructor(private roundService: RoundsService) { }

  ngOnInit(): void {
    this.roundService.getRounds().subscribe(
      (response) => {
        this.rounds = response;
      },
      (error) => {
        // Handle error if any
      }
    );
  }
}
