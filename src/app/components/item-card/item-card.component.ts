import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { ItemHe } from '../../Data/ItemHe';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-item-card',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {

  // @Input()
  // item!: ItemHe;

  messageEvent = output<ItemHe>();

  item = input.required<ItemHe>();


  goToPage(){
    console.log("goToPage" + this.item().category)
    this.messageEvent.emit(this.item());
  }
}
  