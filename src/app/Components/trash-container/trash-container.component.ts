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
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit {
  //archiveNoteList: NoteObj[] = [
    searchText !:string;

  trashNoteList: NoteObj[] = [
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
      this.trashNoteList=res.filter(ele => ele.isTrash === true);
    })
    this.data.currentSearchText.subscribe(state=>this.searchText=state);

  }
  
  updateTrashList($event:{data:NoteObj, action:string}){
    if($event.action=="trash"){ 
    this.trashNoteList=this.trashNoteList.filter((ele)=>ele.notesId != $event.data.notesId)   
    }
    else if($event.action=="delete"){
      this.trashNoteList=this.trashNoteList.filter((ele)=>ele.notesId != $event.data.notesId)   

    }

    }
  }


