import { 
    MatButtonModule, 
    MatCheckboxModule,  
    MatFormFieldModule, 
    MatInputModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatCardModule,
    MatChipsModule
             } from '@angular/material';

import { NgModule } from '@angular/core';

const modules = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatCardModule,
    MatChipsModule
];

@NgModule({
imports: [...modules],
exports: [...modules]
})


export class MaterialModule { }