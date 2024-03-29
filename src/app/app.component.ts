import { Component, OnInit } from '@angular/core';
import { RoundsService } from './rounds.service';
import { RoundsComponent } from './rounds/rounds.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'golf-blog';
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
