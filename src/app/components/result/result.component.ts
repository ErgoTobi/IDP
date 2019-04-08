import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../node_modules/mysql2/node_modules/iconv-lite/data.service';
import {FormControl} from '@angular/forms';
import {MatSort, MatTableDataSource} from '@angular/material';
import { TestsetResult } from '../../models/Result';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

    // user$: (string|number)[] = [];
    user$: Object;

    constructor(private route: ActivatedRoute, private dataService: DataService) {
        this.route.params.subscribe( params => {this.user$ = params.id;
        console.log('logge paramsid');
        console.log(params.id);
        console.log('logge thisuser');
        console.log(this.user$);
        }
        );

    }

    ngOnInit() {
        this.dataService.readResultByIdObject(this.user$).subscribe(
        data => {
            this.user$ = data[0];
            console.log("logge data");
            console.log(this.user$);

        }
        );
    }

}
