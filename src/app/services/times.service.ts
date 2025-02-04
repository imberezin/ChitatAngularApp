import { Injectable, signal } from '@angular/core';
import { Item, TodayTimes } from '../Data/TodayTimes';
import {  ItemHe } from '../Data/ItemHe';


@Injectable({
  providedIn: 'root'
})


export class TimesService {

  times = signal<TodayTimes|null>(null);

  itemHe = signal<ItemHe[]|null>(null);

  parashatWeek = signal<Item|null>(null);

  loading = signal<boolean>(false);
  error = signal<string|null>(null);

  constructor() { 
    console.log("TimesService constructor");
    // Optionally fetch data immediately
    this.fetchTimes();
  }

  buildZmanimUrl(){

    let date = new Date()

    console.log(date.toISOString().split('T')[0]) // 2022-12-27

    let todayString = date.toISOString().split('T')[0]


    let yesterday = new Date(new Date().setDate(new Date().getDate()-5));
    let yesterdayString = yesterday.toISOString().split('T')[0]



    let zmanimUrl = 'https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&start='+yesterdayString+'&end='+todayString+'&ss=on&mf=on&c=on&geo=none=3448439&M=on&s=on&dps=on&dr1=on&F=on&lg=he-x-NoNikud&myomi=on&dty=on&yyomi=on'

    return zmanimUrl
  }
  

  async fetchTimes() {     
    console.log("fetchTimes");
 
    try {
      this.loading.set(true);
      const res = await fetch(this.buildZmanimUrl());
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data: TodayTimes = await res.json();
      // console.log(data);
      this.times.set(data);
      this.fatchTodayInfo()
    } catch (error) {
      console.error('Error fetching times:', error);
      this.error.set(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      this.loading.set(false);
    }
  }


  fatchTodayInfo(){

    //let y: CustomType[] = []

    let items: ItemHe[] = [];
    let date = new Date()


    let todayString = date.toISOString().split('T')[0]

    for (let item of this.times()!.items){
      var categoryHeb = ""

      let itemDateString = item.date.toString()

        
        if (itemDateString == todayString){
          const category = item.category.toString()
          switch(category) { 
            case "dafyomi": { 
              categoryHeb = "הדף היומי - בבלי"
               break; 
            } 
            case "dailyRambam1": { 
               categoryHeb = 'רמב״ם יומי'
               break; 
            } 
            case "mishnayomi": { 
              categoryHeb = 'משנה יומית'
              break; 
            } 
            case "tanakhYomi": { 
            categoryHeb = 'הפרק היומי בתנ״ך'
            break; 
            } 
            case "yerushalmi": { 
            categoryHeb = 'הדף היומי - ירושלמי'
                break; 
            } 
            case "dailyPsalms": { 
              categoryHeb = 'תהילים יומי'
              break; 
            } 
            default: { 
               //statements; 
               categoryHeb =  category
               break; 
            } 
         } 
         
  

         let itemHeb: ItemHe = {
          ...item,
          categoryHeb: categoryHeb,
        }
        
          // let itemHeb = {} as ItemHe;
          // itemHeb.title = item.title
          // itemHeb.category = item.category
          // itemHeb.categoryHeb = categoryHeb
          categoryHeb = ""

          items.push(itemHeb)
        }
        
        if (item.category.toString() == "parashat"){
          console.log("\n==== parashat ====")

          this.parashatWeek.set(item)
         // console.log(this.parashatWeek())

        }

        
    }
    console.log("\n==== items ====")

   // console.log(items)
    this.itemHe.set(items);

    
  }
}
