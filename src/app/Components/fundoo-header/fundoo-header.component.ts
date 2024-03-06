import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { LIST_VIEW_ICON, MENU_ICON, MORE_ICON, OTHER_MENU_ICON, REFRESH_ICON, SEARCH_ICON, SETTING_ICON} from 'src/assets/svg-icons (1)';


import DataService from 'src/app/service/DataServices/data.service';

@Component({
  selector: 'app-fundoo-header',
  templateUrl: './fundoo-header.component.html',
  styleUrls: ['./fundoo-header.component.scss']
})
export class FundooHeaderComponent implements OnInit, OnDestroy {
  drowerState!:boolean;
 subscribe!:Subscription;
 searchText!:string;
  constructor(private data:DataService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router) {
    iconRegistry.addSvgIconLiteral("menu-icon", sanitizer.bypassSecurityTrustHtml(MENU_ICON))
    iconRegistry.addSvgIconLiteral("search-icon", sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
    iconRegistry.addSvgIconLiteral("refresh-icon", sanitizer.bypassSecurityTrustHtml(REFRESH_ICON))
    iconRegistry.addSvgIconLiteral("list-view-icon", sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON))
    iconRegistry.addSvgIconLiteral("settings-icon", sanitizer.bypassSecurityTrustHtml(SETTING_ICON))
    iconRegistry.addSvgIconLiteral("MoreOptions-icon", sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON))    
   }
  
  ngOnInit(): void {
    this.subscribe=this.data.currentDrowerState.subscribe(state=>this.drowerState=state)
    this.subscribe=this.data.currentSearchText.subscribe(state=>this.searchText=state)

  }
  
  
handleDrawerState(){
  this.data.toggleDrowerState(!this.drowerState);
}
updateSearchText(){
  this.data.updateSearchText(this.searchText);
}

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }




}
