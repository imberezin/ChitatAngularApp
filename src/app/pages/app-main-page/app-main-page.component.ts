import { Component, Inject, signal } from '@angular/core';
import { TimesService } from '../../services/times.service';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ItemHe } from '../../Data/ItemHe';
import { BookViewComponent } from "../../components/book-view/book-view.component";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-app-main-page',
  imports: [ItemCardComponent, MatGridListModule, BookViewComponent],
  templateUrl: './app-main-page.component.html',
  styleUrl: './app-main-page.component.scss'
})

export class AppMainPageComponent{

  // times = Inject(TimesService)
  lastMessage = signal<ItemHe | null>(null);

  safeUrl = signal<SafeResourceUrl | undefined>(undefined);

  constructor(public timesService: TimesService, private sanitizer: DomSanitizer) {
    console.log(this.timesService)
  }

  

  handleMessage(message: ItemHe) {

    console.log("app-main-page.component\n")
    console.log(message)
    this.lastMessage.set(message)

    this.safeUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(message.link!));

  }


  
 

}
