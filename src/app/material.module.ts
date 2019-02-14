import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule],
    exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule],
})
export class MaterialModule { }