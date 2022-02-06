import { Component } from '@angular/core';

export interface CardData{
  imageSource:string,
  header:string,
  Description:string,
  safetyRating:number,
  rating:number


}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  cardData:CardData[] =[]
  slideOpts
  constructor() {}

    ngOnInit(){
      this.cardData=[
        {
          imageSource:'../../assets/images/banjir-kanal.jpg',
          header:'Banjir Kanal',
          Description:'Favorite place of this summer',
          safetyRating:8,
          rating:4.4
        
        },
        {
          imageSource:'../../assets/images/amazon-forest.jpeg',
          header:'Amazon Rainforest',
          Description:'Favorite place of this year',
          safetyRating:5,
          rating:4.3
        
        }
        
        
        ]
     
   
  }

}
