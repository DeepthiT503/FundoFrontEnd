import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/service/notesService/note-service.service';
import { ARCHIVE_ICON, BRUSH_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, MORE_ICON, REDO_ICON, REMINDER_ICON, TICK_ICON, TRASH_ICON, UNDO_ICON } from 'src/assets/svg-icons (1)';



interface NoteObj {
  "notesId":number,
  "title": string,
  "description": string,
  "color":string,
  "isArchive": boolean,
  "isPinned": boolean,
  "isTrash": boolean,
}


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  clickToggle:boolean=true;
  toggleClose:boolean=true;
  
  title!:string;
  description!:string;
  archive:boolean=false;
  trash:boolean=false;
  color:string="#ffffff"
  @Output() updateList = new EventEmitter<{data:NoteObj,action:string}>();


  constructor(@Inject(MAT_DIALOG_DATA) public notedetails:NoteObj, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router, private noteservice:NoteServiceService) {
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("collaborator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral("color-plate-icon", sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral('img-icon',sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral("archive-icon", sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral("trash-icon", sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    iconRegistry.addSvgIconLiteral("moreoption-icon", sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral('tick-icon',sanitizer.bypassSecurityTrustHtml(TICK_ICON))
    iconRegistry.addSvgIconLiteral('brush-icon',sanitizer.bypassSecurityTrustHtml( BRUSH_ICON))
    iconRegistry.addSvgIconLiteral('undo-icon',sanitizer.bypassSecurityTrustHtml(UNDO_ICON))
    iconRegistry.addSvgIconLiteral('redo-icon',sanitizer.bypassSecurityTrustHtml(REDO_ICON))
   }

  ngOnInit(): void {
    this.title=this.notedetails.title;
    this.description=this.notedetails.description;
    this.color=this.notedetails.color;
    this.archive=this.notedetails.isArchive;
    this.trash=this.notedetails.isTrash;
  }
  handleEditNote(val:string){
    {
      
          if(val === 'close')
          {
            this.clickToggle=!this.clickToggle; 
            const noteObj = {
                "Title": this.title,
                "Description": this.description,
                "Color": this.color,
                "IsArchive": this.archive,
                "IsPinned": false,
                "IsTrash": this.trash,
             }
           //  console.log(noteObj)
            this.noteservice.editNotes(noteObj).subscribe(res=>this.updateList.emit({data:res.data, action:"edit"})
            )   
           
          }
          
          else
          {
            this.clickToggle = !this.clickToggle;
          }
      
        }
          
      }
      handleEditNoteIconsClick(action:string){
        if(action=="archive"){
          this.archive=!this.archive;
        }
        else if(action=="trash"){
          this.trash=!this.trash;
        }
        else{
          this.color=action;
        }
      }
    
}
