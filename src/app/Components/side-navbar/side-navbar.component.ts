import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import DataService from 'src/app/service/DataServices/data.service';
import { ARCHIVE_ICON, COLLABRATOR_ICON, EDIT_ICON, NOTE_ICON, REMINDER_ICON, TRASH_ICON } from 'src/assets/svg-icons (1)';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit, OnDestroy {

  drowerState!:boolean;
  subscribe!:Subscription;
  constructor(iconRegistery:MatIconRegistry, sanitizer:DomSanitizer, private data:DataService) {
    iconRegistery.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistery.addSvgIconLiteral("remainder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistery.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistery.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistery.addSvgIconLiteral("archive-icon", sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistery.addSvgIconLiteral("trash-icon", sanitizer.bypassSecurityTrustHtml(TRASH_ICON))

    
   }
  
  ngOnInit(): void {
    this.subscribe=this.data.currentDrowerState.subscribe(state=>this.drowerState=state)
  }
  
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();

  }


}
