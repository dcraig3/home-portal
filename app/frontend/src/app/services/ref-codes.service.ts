import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefCodesService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllRefCodes(): Observable<any> {
    return this.http.get(`${environment.mainAPIUrl}/RefCodes/all`);
  }

  getAllRefCodesChildren(id): Observable<any> {
    return this.http.get(`${environment.mainAPIUrl}/RefCodes/getChildren?id=${id}`);
  }

  getRefCodeByName(name): Observable<any> {
    return this.http.get(`${environment.mainAPIUrl}/RefCodes/byName?name=${name}`);
  }

  getRefCodeById(id): Observable<any> {
    return this.http.get(`${environment.mainAPIUrl}/RefCodes/byId?id=${id}`);
  }

  newRefCode(refCode): Observable<any> {
    return this.http.post(`${environment.mainAPIUrl}/RefCodes/newRefCode`, refCode);
  }

  updateRefCode(refCode): Observable<any> {
    return this.http.post(`${environment.mainAPIUrl}/RefCodes/updateRefCode`, refCode);
  }

  deleteRefCode(id): Observable<any> {
    return this.http.delete(`${environment.mainAPIUrl}/RefCodes/deleteRefCode?id=${id}`);
  }
}
