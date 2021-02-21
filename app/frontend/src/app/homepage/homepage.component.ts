import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomService } from '../services/room.service'
import { MatDrawer } from '@angular/material/sidenav';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RefCodesService } from '../services/ref-codes.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomepageComponent implements OnInit {
  constructor(
    private roomService: RoomService,
    private refCodeService: RefCodesService
  ) { }

  @ViewChild('drawer') public drawer: MatDrawer;

  ngOnInit() {
    this.roomService.setRoom(`Home`);
    // this.refCodeService.getAllRefCodes().subscribe( res => {
    //   console.log(res);
    // });
  }

  openSideView(string) {
    console.log(string);
    this.roomService.setRoom(string);
    this.drawer.toggle();
  }
}
