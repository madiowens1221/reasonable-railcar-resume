
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { SectionHeaderComponent } from './section-header/section-header.component';

@NgModule({
    imports: [
        FlexLayoutModule
    ],
    declarations: [
        SectionHeaderComponent
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
        SectionHeaderComponent
    ]
})
export class SharedModule { }
