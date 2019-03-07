import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {FormControl} from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import {testsetresult} from '../../models/testsetresult.js';


@Component({
  selector: 'app-resultoverview',
  templateUrl: './resultoverview.component.html',
  styleUrls: ['./resultoverview.component.scss']
})
export class ResultoverviewComponent implements OnInit {
    public displayedColumns = ['name', 'id', 'duration', 'Testset_id'];
    dataSource = new MatTableDataSource<testsetresult>();

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.readAllTestsetResult().subscribe(
            data => {
                this.dataSource.data = data as testsetresult[];
                console.log(data);
            }
        );
    }
}

/*    testCarmen1() {
        const carmen1 = this.dataService.readAllTestsetResult();
        console.log('did the first thing');
        // console.log(carmen1[0].name);
        // const carmen1_1 = carmen1[1].get('name');
        console.log('did the second thing');
        // console.log(carmen1_1);
    }
    testCarmen2() {
        const carmen2 = this.dataService.readTestsetresult(2);
        console.log('show id');
        console.log(carmen2);
        this.dataService.readAllTestsetResult().subscribe(
            data => {this.users$ = data; console.log(data); }
        );
        // this.dataService.readAllTestsetResult().subscribe({
         //   next: function() {}}
         // );
    }*/


/* users$: Object;

 constructor(private data: DataService) { }

 ngOnInit() {
     this.data.getResultData().subscribe(
         data => this.users$ = data
     );
 }*/



/* LIST CODE */

