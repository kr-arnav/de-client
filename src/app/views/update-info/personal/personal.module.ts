import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { FormsModule } from '@angular/forms';
import { PersonalService } from '@services/personal/personal.service';
import { SharedModule } from '@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PersonalComponent],
  imports: [
    PersonalRoutingModule,
    SharedModule,
    MatButtonModule
  ],
  providers: [PersonalService]
})
export class PersonalModule { }
