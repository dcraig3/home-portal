import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(
    private http: HttpClient,
  ) { }

  uploadDocument(itemId, file): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'application/json');
    return this.http.post(`${environment.mainAPIUrl}/Documents/uploadDocument?itemId=${itemId}`, file, { headers });
  }

  downloadDocument(documentId) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/octet-stream');
    headers.set('Accept', 'text/plain');
    return this.http.get(`${environment.mainAPIUrl}/Documents/downloadDoc?id=${documentId}`, {
      headers, responseType: 'blob',
      observe: 'response'
    });
  }

  downloadAllAsZip(itemId) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/octet-stream');
    headers.set('Accept', 'text/plain');
    return this.http.get(`${environment.mainAPIUrl}/Documents/downloadZip?itemId=${itemId}`, {
      headers, responseType: 'blob',
      observe: 'response'
    });
  }

  getDocumentList(itemId) {
    return this.http.get(`${environment.mainAPIUrl}/Documents/fromRef?id=${itemId}`);
  }

  deleteDocument(documentId) {
    return this.http.delete(`${environment.mainAPIUrl}/Documents/deleteDocument?id=${documentId}`);
  }

}
