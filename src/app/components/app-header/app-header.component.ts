import { Component, computed, Signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TimesService } from '../../services/times.service';
// import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

   today: Signal<string> = computed(() => {
     const todayH = new Intl.DateTimeFormat('he-u-ca-hebrew',{weekday: 'long', year:'numeric', month:'numeric', day:'numeric'}).format(new Date());
    console.log(todayH)
    
    return todayH
   } );


     constructor(public timesService: TimesService) {
   
     }
   
}
