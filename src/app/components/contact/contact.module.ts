import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    ContactComponent,
  ],
  exports: [
    ContactComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
  ]
})
export class ContactModule { }
