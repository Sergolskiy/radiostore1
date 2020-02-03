import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {MatDialog, MatTableDataSource, PageEvent} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
//import { Router } from '@angular/router';


import {ActivatedRoute, Router} from '@angular/router';
import {StatisticsService} from '../../services/statistics.service';
// import {AmChartsService} from '@amcharts/amcharts3-angular';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

import {isUndefined} from 'util';
import {Subscription} from 'rxjs/Subscription';

export const MY_FORMATS = {
    parse: {
        dateInput: 'L',
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMM YYYY',
    },
};

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'ru-US'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ]
})

export class StatisticsComponent implements OnInit, OnDestroy {
    private chart: AmChart;

    constructor(private AmCharts: AmChartsService) {
    }

    ngOnInit() {

        // this.chart.path = '/node_modules/amcharts3/amcharts/';
    }

    ngAfterViewInit() {
        this.chart = this.AmCharts.makeChart('chartdiv', {
            'type': 'serial',
            'theme': 'light',
            'dataProvider': [],
        });
    }

    ngOnDestroy() {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    }
}
