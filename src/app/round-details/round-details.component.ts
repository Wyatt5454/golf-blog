import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoundsService } from '../rounds.service';

@Component({
  selector: 'app-round-details',
  templateUrl: './round-details.component.html',
  styleUrls: ['./round-details.component.css']
})
export class RoundDetailsComponent implements OnInit {
  roundData: any;
  roundId!: string;

  constructor(
    private route: ActivatedRoute,
    private roundService: RoundsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roundId = params['id'];
      this.getRoundDetails();
    });
  }

  getRoundDetails() {
    this.roundService.getRoundById(this.roundId)
      .subscribe(data => {
        this.roundData = data;
      });
  }
}
