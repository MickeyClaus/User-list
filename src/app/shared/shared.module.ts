import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { ConfirmationPopoverComponent } from './components/confirmation-popover/confirmation-popover.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ConfirmationPopoverComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
    ],
    exports: [
        RouterModule,
        ConfirmationPopoverComponent,
    ],
    entryComponents: [],
})
export class SharedModule {
}
