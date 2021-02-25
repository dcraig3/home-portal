import { Component, OnInit, Input } from '@angular/core';
import { RefCodesService } from '../services/ref-codes.service';
import { ItemService } from '../services/item.service';
import { DocumentsService } from '../services/documents.service';
import { saveAs } from 'file-saver';
import { LinksService } from '../services/links.service';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.sass']
})
export class DetailViewComponent implements OnInit {

  @Input() selectedItem: any;
  editingItem: boolean;
  documentsArray: any;
  makingChanges = false;
  linkArray: any;
  newLinksArray: any[] = [];
  refCodes: any;

  constructor(
    private refCodeService: RefCodesService,
    private itemService: ItemService,
    private documentService: DocumentsService,
    private linksService: LinksService,
    private snotifyService: SnotifyService,
    private modalService: NgbModal,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.selectedItem);
    this.getDocumentList();
    this.getItemLinks();
    this.getAllRefCodes();
  }

  getAllRefCodes() {
    this.refCodeService.getAllRefCodes().toPromise().then(res => {
      this.refCodes = res as any;
      // console.log(this.refCodes);
    });
  }

  toggleEdit() {
    this.editingItem = !this.editingItem;
  }

  resetFields() {
    this.makingChanges = true;
    // console.log(this.selectedItem);
    this.itemService.getItemById(this.selectedItem.id).toPromise().then(results => {
      this.toggleEdit();
      this.selectedItem = results;
      this.makingChanges = false;
    })
  }

  saveChanges() {
    this.makingChanges = true;
    // console.log(this.selectedItem);
    this.itemService.updateItem(this.selectedItem).toPromise().then(res => {
      this.selectedItem = res as any;
      this.makingChanges = false;
      this.toggleEdit();
    });
  }

  getDocumentList() {
    // console.log(this.selectedItem.id);
    this.documentService.getDocumentList(this.selectedItem.id).subscribe(res => {
      // console.log(res[0]);
      this.documentsArray = res as any;
      console.log(res);
    });
  }

  uploadDocument(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      const formData = new FormData();
      formData.append('file', file);
      // console.log(this.selectedItem);
      this.documentService.uploadDocument(this.selectedItem.id, formData).toPromise().then(res => {
        this.getDocumentList();
      });
    }
  }

  downloadDocument(attId) {
    if (!this.makingChanges) {
      this.documentService.downloadDocument(attId).toPromise().then(res => {
        this.saveToFileSystem(res);
      });
    }
  }

  downloadZip() {
    this.documentService.downloadAllAsZip(this.selectedItem.id).toPromise().then(res => {
      this.saveToFileSystem(res);
    });
  }

  private saveToFileSystem(response) {
    const contentDispositionHeader: string = response.headers.get(
      'Content-Disposition'
    );
    const parts: string[] = contentDispositionHeader.split(';');
    const filename = parts[1].split('=')[1];
    const blob = new Blob([response.body], { type: 'text/plain' });
    saveAs(blob, filename);
  }

  removeDocumentWarn(documentId) {
    this.snotifyService.warning('Are you sure you want to remove this file?', {
      timeout: 100000,
      closeOnClick: true,
      buttons: [
        { text: 'Yes', action: () => this.removeDocument(documentId), bold: true },
        { text: 'No', action: null },
      ],
      showProgressBar: false,
      pauseOnHover: false,
      position: SnotifyPosition.centerBottom,
    });
  }

  removeDocument(documentId) {
    this.documentService.deleteDocument(documentId).toPromise().then(res => {
      this.getDocumentList();
    });
  }

  getItemLinks() {
    this.linksService.getByItemId(this.selectedItem.id).subscribe(res => {
      this.linkArray = res as any;
    });
  }

  addNewLink() {
    this.newLinksArray[this.newLinksArray.length] = { linkName: '', linkAddress: '', linkItem: this.selectedItem.id };
    console.log(this.newLinksArray);
  }

  applyLinks(i) {
    console.log(i, this.newLinksArray[i]);
  }

  removeLinkWarning(linkId) {
    this.snotifyService.warning('Are you sure you want to remove this file?', {
      timeout: 100000,
      closeOnClick: true,
      buttons: [
        { text: 'Yes', action: () => this.removeLink(linkId), bold: true },
        { text: 'No', action: null },
      ],
      showProgressBar: false,
      pauseOnHover: false,
      position: SnotifyPosition.centerBottom,
    });
  }

  removeLink(linkId) {
    this.linksService.removeLink(linkId).toPromise().then(res => {
      this.getItemLinks();
    });
  }

  removeLinkBuffer(i) {
    if (this.newLinksArray.length === 1) {
      this.newLinksArray = [];
    } else {
      delete this.newLinksArray[i];
    }
    console.log(this.newLinksArray);
  }

  saveLinks(i) {
    console.log(this.newLinksArray[i]);
    this.linksService.saveLink(this.newLinksArray[i]).subscribe(res => {
      this.removeLinkBuffer(i);
      this.getItemLinks();
    });
  }

  itemDeleteWarn() {
    this.snotifyService.warning('Are you sure you want to remove this item?', {
      timeout: 100000,
      closeOnClick: true,
      buttons: [
        { text: 'Yes', action: () => this.removeItemChildren(), bold: true },
        { text: 'No', action: null },
      ],
      showProgressBar: false,
      pauseOnHover: false,
      position: SnotifyPosition.centerBottom,
    });
  }

  async removeItemChildren() {
    // debugger;
    let confirmDone = 0;
    for (let i = 0; this.documentsArray.length > i; i++) {
      await this.documentService.deleteDocument(this.documentsArray[i][0]).toPromise().then(doc => {
        if (this.documentsArray.length - 1 === i) {
          if (confirmDone === 1) {
            this.removeItem();
          } else if (confirmDone === 0 && this.linkArray.length === 0) {
            this.removeItem();
          } else {
            confirmDone = confirmDone++;
          }
        }
      });
    }
    for (let l = 0; this.linkArray.length > l; l++) {
      await this.linksService.removeLink(this.linkArray[l].id).toPromise().then(link => {
        if (this.linkArray.length - 1 === l) {
          if (confirmDone === 1) {
            this.removeItem();
          } else if (confirmDone === 0 && this.documentsArray.length === 0) {
            this.removeItem();
          } else {
            confirmDone = confirmDone++;
          }
        }
      });
    }
    if (this.documentsArray.length === 0 && this.linkArray.length === 0) {
      this.removeItem();
    }
  }

  removeItem() {
    this.itemService.deleteItem(this.selectedItem.id).subscribe(item => {
      this.modalService.dismissAll(`refresh`);
      this.snotifyService.success('Item removed', {
        position: SnotifyPosition.centerBottom,
        closeOnClick: true,
        timeout: 2000,
      });
    });
  }

  setimage(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const formData = new FormData();
        formData.append('file', file);
        this.itemService.uploadImage(this.selectedItem.id, formData).toPromise().then(res => {
          // const results = res as any;
          this.selectedItem.image = res.image;
          this.selectedItem.imgMime = res.imgMime;
        });
      }
    }
  }

  // printPage() {
  //   const url = this.router.serializeUrl(
  //     this.router.createUrlTree([`/#/print/${this.selectedItem.id}`])
  //   );
  //   window.open(url, '_blank');
  // }
}
