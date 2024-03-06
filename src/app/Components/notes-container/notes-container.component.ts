import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/service/DataServices/data.service';
import { NoteServiceService } from 'src/app/service/notesService/note-service.service';


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
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {
  searchText !:string;
  notesList:NoteObj[]=[{
    "notesId":0,
    "title": "",
    "description": "",
    "color":"",
    "isArchive": false,
    "isPinned": false,
    "isTrash": false,
  }]; 
     constructor(private noteservice:NoteServiceService, private data:DataService) {

   }

  ngOnInit(): void {
    this.noteservice.getAllNotes().subscribe((res:NoteObj[])=>
    { 
       this.notesList=res.filter((ele, index) => !ele.isArchive && !ele.isTrash)
    })
    this.data.currentSearchText.subscribe(state=>this.searchText=state)

  }
  // filtering the data in the noteList
  updateNotesList($event:{data:NoteObj,action:string})
  {
    if($event.action=="create")
    {
      if(!$event.data.isArchive)
      {
        this.notesList=[$event.data,...this.notesList]
      }
    }
    else if($event.action=="archive" || $event.action=="trash" )
    {
        this.notesList=this.notesList.filter((ele,index)=>ele.notesId != $event.data.notesId)   
    }
    // console.log($event);   
    else
    {
      this.notesList=this.notesList.map(ele=>{
        if(ele.notesId==$event.data.notesId)
         return $event.data
        return ele
      })
    }
  }

}