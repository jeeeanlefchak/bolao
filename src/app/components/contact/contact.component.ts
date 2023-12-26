import { Component, OnInit, NgModule } from '@angular/core';
import { SharedDataService } from '../../services/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  

  constructor(private shared: SharedDataService) { }

  ngOnInit() {
    
  }

}
