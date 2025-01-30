import { Component, computed, input, OnInit } from '@angular/core';
import { ItemHe } from '../../Data/ItemHe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-book-view',
  imports: [],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.scss'
})

export class BookViewComponent implements OnInit{

  item = input.required<ItemHe>();

  safeUrl = input.required<SafeResourceUrl | undefined>();

  constructor(private sanitizer: DomSanitizer) {

    console.log("sanitizer")

  }

  ngOnInit() {
    console.log("ngOnInit")

  }


}
