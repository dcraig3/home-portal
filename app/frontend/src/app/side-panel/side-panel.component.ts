import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../services/room.service'
import { Observable } from 'rxjs';
import { RefCodesService } from '../services/ref-codes.service';
import { ItemService } from '../services/item.service';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ChildActivationEnd } from '@angular/router';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { DocumentsService } from '../services/documents.service';
import { LinksService } from '../services/links.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.sass'],
  providers: [NgbModalConfig, NgbModal]
})
export class SidePanelComponent implements OnInit {
  @Input() code: string
  @Input() hideToggle: boolean
  selectedItem: any;
  activeRoom: any;
  subscription: any;
  recursive = false;
  activeRoomName = ``;
  children = null;
  items: any;
  isOpen: any;
  isLoadingChildren: boolean;
  isLoadingItems: boolean;
  itemOrRoom: any;
  activeRoomId: any;
  childRoom: any;
  isEditingRoom: any;
  doneRemoving: boolean;

  constructor(
    private roomService: RoomService,
    private refCodeService: RefCodesService,
    private itemService: ItemService,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private snotifyService: SnotifyService,
    private documentService: DocumentsService,
    private linkService: LinksService,
  ) { }

  ngOnInit(): void {
    console.log(this.code);
    if (this.code) {
      this.getSubRoom(this.code);
    } else {
      this.getRoom();
    }
  }

  getRoom() {
    this.isLoadingItems = true;
    this.subscription = this.roomService.getRoom().subscribe(res => {
      if (res) {
        this.activeRoom = res;
        this.activeRoomName = this.activeRoom.name;
        this.refCodeService.getAllRefCodesChildren(this.activeRoom.id).subscribe(children => {
          this.children = children as any;
          this.isLoadingChildren = false;
        });
        this.itemService.getItemsByCode(this.activeRoom.id).subscribe(items => {
          this.items = items as any;
          this.isLoadingItems = false;
        });
      }
    });
  }

  getChildInfomation(RefCode, i) {
    if (this.isOpen === i) {
      this.isOpen = null;
    } else {
      this.isOpen = i;
    }
    this.recursive = RefCode.id;
  }

  getSubRoom(id) {
    this.isLoadingItems = true;
    this.itemService.getItemsByCode(id).subscribe(res => {
      this.items = res as any;
      this.isLoadingItems = false;
    });
    this.refCodeService.getAllRefCodesChildren(id).toPromise().then(res => {
      this.children = res as any;
      this.isLoadingChildren = false;
    });
  }

  uploadImage(id, event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const formData = new FormData();
        formData.append('file', file);
        this.itemService.uploadImage(id, formData).toPromise().then(res => {

        });
      }
    }
  }

  open(content, childRoom) {
    console.log(childRoom);
    this.childRoom = childRoom;
    this.modalService.open(content, { ariaLabelledBy: 'ngbd-modal-confirm' }).result.then((result) => {
    }, (reason) => {
      if (reason === `refresh`) {
        this.ngOnInit();
      }
    });
  }

  editContent(childRoom) {
    this.isEditingRoom = childRoom.id;
  }

  removeRoomWarning(refCode) {
    this.snotifyService.warning('Are you sure you want to remove this space?', {
      timeout: 100000,
      closeOnClick: true,
      buttons: [
        { text: 'Yes', action: () => this.getAllChildrenRecursive(refCode), bold: true },
        { text: 'No', action: null },
      ],
      showProgressBar: false,
      pauseOnHover: false,
      position: SnotifyPosition.centerBottom,
    });
  }

  async getAllChildrenRecursive(refCode) {
    let arrayofCodes = [[refCode]];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < arrayofCodes.length; i++) {
      // tslint:disable-next-line: prefer-for-of
      for (let x = 0; x < arrayofCodes[i].length; x++) {
        if (arrayofCodes[i][x] != null) {
          await this.refCodeService.getAllRefCodesChildren(arrayofCodes[i][x].id).toPromise().then(children => {
            if (children.length > 0) {
              arrayofCodes.push(children);
            }
          });
        }
      }
    }
    arrayofCodes.reverse();
    console.log(arrayofCodes);
    this.getItemsForDeleting(arrayofCodes);
  }

  async recursiveRemoveRefCode(refCodeArray) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < refCodeArray.length; i++) {
      // tslint:disable-next-line: prefer-for-of
      for (let x = 0; x < refCodeArray[i].length; x++) {
        if (refCodeArray[i][x] != null) {
          await this.refCodeService.deleteRefCode(refCodeArray[i][x].id).toPromise().then(res => {

          });
        }
      }
    }
  }

  async getItemsForDeleting(arrayofCodes) {
    let itemArray = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < arrayofCodes.length; i++) {
      // tslint:disable-next-line: prefer-for-of
      for (let x = 0; x < arrayofCodes[i].length; x++) {
        if (arrayofCodes[i][x] != null) {
          await this.itemService.getItemsByCode(arrayofCodes[i][x].id).toPromise().then(res => {
            const results = res as any;
            if (results.length > 0) {
              for (let item = 0; results.length > item; item++) {
                itemArray[itemArray.length] = results[item];
              }
            }
          });
        }
      }
    }
    this.removeItem(itemArray, arrayofCodes);
  }

  async removeItem(itemArray, arrayofCodes) {
    let documentsArray;
    let linkArray;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < itemArray.length; i++) {
      if (itemArray[i]) {
        await this.documentService.getDocumentList(itemArray[i].id).toPromise().then(res => {
          documentsArray = res as any;
          if (documentsArray.length === 0) {
            documentsArray = [[0]];
          }
        });
        await this.linkService.getByItemId(itemArray[i].id).toPromise().then(res => {
          linkArray = res as any;
          if (linkArray.length === 0) {
            linkArray = [{id: 0}];
          }
        });
        for (let d = 0; documentsArray.length > d; d++) {
          this.documentService.deleteDocument(documentsArray[d][0]).toPromise().then(doc => {
            if (documentsArray.length - 1 === d) {
              for (let l = 0; linkArray.length > l; l++) {
                this.linkService.removeLink(linkArray[l].id).toPromise().then(link => {
                  if (linkArray.length - 1 === l) {
                    this.itemService.deleteItem(itemArray[i].id).subscribe(item => {
                      if (itemArray.length - 1 === i) {
                        this.recursiveRemoveRefCode(arrayofCodes);
                        this.isEditingRoom = null;
                      }
                    });
                  }
                });
              }
            }
          });
        }
      } else if (true) {
        this.recursiveRemoveRefCode(arrayofCodes);
        this.isEditingRoom = null;
      }
    }
  }

  removeRoom(refCode) {
    this.refCodeService.deleteRefCode(refCode.id).toPromise().then(res => {

    });
  }

  saveRoom(reCode) {
    this.refCodeService.updateRefCode(reCode).toPromise().then(res => {
      this.isEditingRoom = null;
    });
  }

  openDetail(detail, item) {
    this.selectedItem = item;
    this.modalService.open(detail, { ariaLabelledBy: 'ngbd-modal-confirm' }).result.then((result) => {
    }, (reason) => {
      if (reason === `refresh`) {
        this.ngOnInit();
      }
    });
  }

}
