import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selectedTab='home'
  constructor() {}

  selectTab(id){
    
  this.selectedTab =id
  }

}
