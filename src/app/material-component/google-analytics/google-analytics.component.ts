import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {GoogleAnalyticsService} from "../../services/google-analytics.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-google-analytics',
  templateUrl: './google-analytics.component.html',
  styleUrls: ['./google-analytics.component.scss']
})
export class GoogleAnalyticsComponent implements OnInit {

  period: number = 14;

  constructor(private service:GoogleAnalyticsService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    //GoogleAnalytics
    this.service.getAnalytics(this.period).subscribe((res:any) => {
      console.log(res);
    });
  }

}
