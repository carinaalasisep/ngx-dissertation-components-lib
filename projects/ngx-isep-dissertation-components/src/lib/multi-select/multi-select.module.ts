import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { MultiSelectComponent } from "./multi-select.component";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "../checkbox/checkbox.module";

@NgModule({
    declarations: [MultiSelectComponent],
    imports: [CommonModule, FormsModule, CheckboxModule],
    exports: [MultiSelectComponent]
})
export class MultiSelectModule { }