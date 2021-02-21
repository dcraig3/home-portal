import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { RefCodesService } from './ref-codes.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  currentRoom: Object;
  currentRoomObservable: BehaviorSubject<any> = new BehaviorSubject(this.currentRoom);

  constructor(
    private refCodeService: RefCodesService,
  ) { }

  public setRoom(name: string) {
    this.refCodeService.getRefCodeByName(name).subscribe(res => {
      this.currentRoom = res;
      this.currentRoomObservable.next(this.currentRoom);
      console.log(this.currentRoom);
    });
  }

  public getRoom(): Observable<any> {
    return this.currentRoomObservable.asObservable();
  }
}
