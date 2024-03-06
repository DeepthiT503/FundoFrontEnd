import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteServiceService } from 'src/app/service/notesService/note-service.service';
import { Router } from '@angular/router';
import { ARCHIVE_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, DELETE_FOREVER_ICON, EDIT_ICON, IMG_ICON, MORE_ICON, NOTE_ICON, REMINDER_ICON, RESTORE_ICON, UNARCHIVE_ICON } from 'src/assets/svg-icons (1)';

interface NoteObj{
  "notesId":number,
  "title": string,
  "description": string,
  "color": string,
  "isArchive": boolean,
  "isPinned": boolean,
  "isTrash": boolean,
  
}
@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {
  
  color!:string;

  @Output() updateList = new EventEmitter<{data: NoteObj, action:string}>();

  @Input() noteDetails!: NoteObj;
  @Input() notesContainer!:string;


   constructor(private  iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router, private noteservice:NoteServiceService ) {

    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral("collaborator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
     iconRegistry.addSvgIconLiteral("color-palate-icon", sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral("image-icon", sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral('delete-forever', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON))
   iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON))
   iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))


  } 
   ngOnInit(): void {
  }
// handleNoteCardColor(color:string){
//   this.color=color;
// }
handleNoteCardIconsClick(action:string){
  if(action=="archive"){
    this.noteservice.archiveNotes(this.noteDetails.notesId).subscribe(res=>this.updateList.emit({data:this.noteDetails, action:"archive"}))    
  }
  else if(action=="trash"){
    this.noteservice.trashNotes(this.noteDetails.notesId).subscribe(res=>this.updateList.emit({data:this.noteDetails, action:"trash"}))
  }
  else if(action=="delete")[
    this.noteservice.deleteNotes(this.noteDetails.notesId).subscribe(res=>this.updateList.emit({data:this.noteDetails, action:"delete"}))
  ]
  else{
    this.noteservice.colorNotes(this.noteDetails.notesId,action).subscribe((res:any)=>this.updateList.emit({data:res,action:"color"}))
    
  }
}

}