import { Component } from '@angular/core';
import { RoundsService } from './rounds.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'golf-blog';
  constructor(private roundService: RoundsService) { }

  ngOnInit(): void {
    this.roundService.getRounds().subscribe(
      (response) => {
        // Handle the response and store it in a variable
      },
      (error) => {
        // Handle error if any
      }
    );
  }
  
}
