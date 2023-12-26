
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    selectedTab: string = 'HOME';

    constructor(
        
    ) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {

    }

}
