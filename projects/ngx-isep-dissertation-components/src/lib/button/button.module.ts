import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { CommonModule } from "@angular/common";
import { IconModule } from "../icon/icon.module";

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, IconModule],
    exports: [ButtonComponent]
})
export class ButtonModule { }