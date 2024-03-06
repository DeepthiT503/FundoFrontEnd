import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/service/DataServices/data.service';
import { NoteServiceService } from 'src/app/service/notesService/note-service.service';

interface NoteObj{
  "notesId":number,
  "title":string,
  "description":string,
  "color":string,
  "isArchive":boolean,
  "isPinned":boolean,
  "isTrash":boolean,
}
@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {
  searchText !:string;

  archiveNoteList: NoteObj[] = [
    {
      notesId: 0,
      title: "",
      description: "",
      color: "",
      isArchive: false,
      isPinned: false,
      isTrash: false,
    }
  ];
   constructor(private noteservice:NoteServiceService, private data:DataService) { }

  ngOnInit(): void {
    this.noteservice.getAllNotes().subscribe((res:NoteObj[])=>{
      this.archiveNoteList=res.filter(ele => ele.isTrash === false);
    })
    this.data.currentSearchText.subscribe(state=>this.searchText=state)

  }

  updateArchiveList($event:{data:NoteObj, action:string})
  {
  if($event.action=="archive" || $event.action=="trash" )
    {
        this.archiveNoteList=this.archiveNoteList.filter((ele)=>ele.notesId != $event.data.notesId)   
    }
    // console.log($event);   
    else
    {
      this.archiveNoteList=this.archiveNoteList.map(ele=>{
        if(ele.notesId==$event.data.notesId)
         return $event.data
        return ele
      })

    }

  }
  }

