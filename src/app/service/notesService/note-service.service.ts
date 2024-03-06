import { Injectable } from '@angular/core';
import { HttpServicesService } from '../HttpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private http:HttpServicesService) { 

  }
  createNote(data:object){
    return this.http.CreateNotesApiCall("Notes", data)
  }


  getAllNotes(){
    return this.http.getAllNotesApiCall("Notes/getuserNotes")
  }

  archiveNotes(noteId:number){
    return this.http.archiveNotesApi("Notes/archive", noteId)
  }
  
  trashNotes(noteId:number){
    return this.http.trashNotesApi("Notes/trash", noteId)
  }

  colorNotes(noteId:number, color:string){
    return this.http.colorNotesApi("Notes/color", noteId, color)
  }

  deleteNotes(noteId: number) {
    return this.http.deleteNotesApi("Notes/delete", noteId);
  }
  

    editNotes(data:object){
    return this.http.editNoteApiCall("Notes/update",data)
    }

}
