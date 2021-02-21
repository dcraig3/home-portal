import { Component, OnInit, Input } from '@angular/core';
import { RefCodesService } from '../services/ref-codes.service';
import { ItemService } from '../services/item.service';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.sass']
})
export class CreateItemComponent implements OnInit {

  item = { image: null, imgMime: '', name: '', model: '', serial: '', date: null, description: '', notes: '', refCode: null };

  @Input() activeRoom: any;
  itemOrRoom: string;
  image: any;
  formData: FormData;
  imageData: any;
  file = null;
  newRoom: any;
  constructor(
    private refCodeService: RefCodesService,
    private itemService: ItemService,
    private dialogRef: MatDialog,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {

  }

  setObject(itemOrRoom) {
    this.itemOrRoom = itemOrRoom;
  }

  setimage(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.formData = new FormData();
        this.formData.append('file', this.file);
        this.imageData = reader.result;
      };
    }
  }

  uploadImage(id) {
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      const formData = new FormData();
      formData.append('file', this.file);
      this.itemService.uploadImage(id, formData).toPromise().then(res => {
        this.modalService.dismissAll(`refresh`);
      });
    };
  }

  saveItem() {
    if (this.file) {
      this.item.imgMime = this.file.type;
    }
    this.item.refCode = this.activeRoom;
    this.itemService.createItem(this.item).toPromise().then(res => {
      const newItem = res as any;
      if (this.file != null) {
        this.uploadImage(newItem.id);
      } else {
        this.modalService.dismissAll(`refresh`);
      }
    });
  }

  saveSpace() {
    const refCode = { name: this.newRoom, parentRefCode: this.activeRoom, parentId: this.activeRoom.id };
    this.refCodeService.newRefCode(refCode).toPromise().then(res => {
      this.modalService.dismissAll(`refresh`);
    });
  }

}
