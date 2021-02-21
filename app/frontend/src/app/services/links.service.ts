import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(
    private http: HttpClient,
  ) { }

  getByItemId(itemId): Observable<any> {
    return this.http.get(`${environment.mainAPIUrl}/Links/getByItemId?id=${itemId}`);
  }

  saveLink(link): Observable<any> {
    return this.http.post(`${environment.mainAPIUrl}/Links/uploadLinks`, link);
  }

  removeLink(linkId): Observable<any> {
    return this.http.delete(`${environment.mainAPIUrl}/Links/deleteLinks?id=${linkId}`);
  }

}
