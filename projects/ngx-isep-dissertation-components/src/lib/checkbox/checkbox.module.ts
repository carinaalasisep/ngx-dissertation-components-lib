import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CheckboxComponent } from "./checkbox.component";

@NgModule({
    declarations: [CheckboxComponent],
    imports: [CommonModule, FormsModule],
    exports: [CheckboxComponent]
})
export class CheckboxModule { }