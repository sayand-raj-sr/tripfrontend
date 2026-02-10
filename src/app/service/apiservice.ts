import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tripmodel } from '../model/trip';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  apiURL='https://tripbackend-mrlf.onrender.comhttps://tripbackend-mrlf.onrender.com'
  constructor(private http:HttpClient){

  }

  getallAPI(){
    return this.http.get<tripmodel[]>(this.apiURL+'/trip')
  }
  getsingledataAPI(id:number){
  //  return this.http.get<tripmodel[]>(this.apiURL+'/trip/'+id)
  return this.http.get(`${this.apiURL}/trip/${id}`)
  }
  deletedataAPI(id:number){
    return this.http.delete(this.apiURL+'/trip/'+id)
  }

updatedataAPI(id: string, data: Omit<tripmodel, 'id'>): Observable<tripmodel> {
  return this.http.put<tripmodel>(this.apiURL+'/trip/'+id, data);
}
  adddataAPI(data:Omit<tripmodel,'id'>):Observable<tripmodel>{
    return this.http.post<tripmodel>(this.apiURL+'/trip',data)
  }
}
