import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule/* ,
    RouterModule.forChild([{ path: '', component: Tab1Page }]) */
  ],
  exports: [CardComponent],
  declarations: [CardComponent],
  providers: []
})
export class CardModule {}
