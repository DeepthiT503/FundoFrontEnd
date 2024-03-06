import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  baseUrl:string ="https://localhost:7064/api/";
  public header=new HttpHeaders({
    Authorization : `Bearer ${localStorage.getItem("AuthToken")}`
  })

  
  constructor(private http:HttpClient) { }

  
    loginApiCall(endpoint: string, data:object): Observable<any>
    {
     return this.http.post(this.baseUrl+endpoint, data);
  }

  registerApiCall(endpoint: string, data:object): Observable<any>{
    return this.http.post(this.baseUrl+endpoint, data);
  }
  CreateNotesApiCall(endPoint:string,data:object):Observable<any>{
    return this.http.post(this.baseUrl+endPoint,data,{headers:this.header})
  }
  archiveNotesApi(endpoint:string, noteId:number){
    return this.http.put(this.baseUrl+endpoint+'?notesId='+noteId,"",{headers:this.header})
  }
  trashNotesApi(endpoint:string, noteId:number){
    return this.http.put(this.baseUrl+endpoint+'?notesId='+noteId, "",{headers:this.header})
  }
  colorNotesApi(endpoint:string, noteId:number, color:string){
    const encodedColor = encodeURIComponent(color);
    return this.http.put(this.baseUrl+endpoint+'?notesId='+noteId +'&color='+encodedColor, "", {headers:this.header} )
  }
  // 
  editNoteApiCall(endpoint: string, data:object):Observable<any>{
    return this.http.put(this.baseUrl+endpoint, data,{headers:this.header})
  }
  deleteNotesApi(endpoint: string, noteId: number) {
    return this.http.delete(this.baseUrl+endpoint+'?notesId='+noteId, { headers: this.header })
  }
  
  
  getAllNotesApiCall(endpoint:string):Observable<any> {
    const header = new HttpHeaders({
      Authorization : `Bearer ${localStorage.getItem("AuthToken")}`
    })
    return this.http.get(this.baseUrl+endpoint,{
      headers:header
    })

  }
}
