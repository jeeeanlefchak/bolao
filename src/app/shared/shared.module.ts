import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// const exportComponents = [
// ];

// const exportsAngularModules = [

// ];

// const exportPrimeNgModules = [

// ];

const othersExportsModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
];

@NgModule({
    declarations: [
        //...exportComponents
    ],
    imports: [
        ...othersExportsModules,
        // ...exportPrimeNgModules
    ],
    exports: [
        ...othersExportsModules,
        // ...exportComponents,
        // ...exportsAngularModules,
        // ...exportPrimeNgModules
    ],
    providers: [
    ],
})
export class SharedModule { }
