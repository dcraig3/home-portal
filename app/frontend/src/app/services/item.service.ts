import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllItems(): Observable<any> {
    return this.http.get(`${environment.mainAPIUrl}/Item/all`);
  }

  getItemsByCode(refCodeId): Observable<any> {
    return this.http.get(`${environment.mainAPIUrl}/Item/fromRef?code=${refCodeId}`);
  }

  getItemById(id): Observable<any> {
    return this.http.get(`${environment.mainAPIUrl}/Item/fromId?id=${id}`);
  }

  uploadImage(id, file): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'application/json');
    return this.http.post(`${environment.mainAPIUrl}/Item/uploadImage?id=${id}`, file, { headers: headers });
  }

  createItem(item): Observable<any> {
    return this.http.post(`${environment.mainAPIUrl}/Item/uploadItem`, item);
  }

  updateItem(item): Observable<any> {
    return this.http.post(`${environment.mainAPIUrl}/Item/updateItem`, item);
  }

  deleteItem(id): Observable<any> {
    return this.http.delete(`${environment.mainAPIUrl}/Item/deleteItem?id=${id}`);
  }
}
