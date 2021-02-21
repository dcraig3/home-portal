import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { DocumentsService } from '../services/documents.service';
import { LinksService } from '../services/links.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-print-view',
  templateUrl: './print-view.component.html',
  styleUrls: ['./print-view.component.sass']
})
export class PrintViewComponent implements OnInit {
  itemId: string;
  documentsArray: any;
  linkArray: any;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';
  item: any;
  hideLinks = false;
  link2qr = false;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private documentService: DocumentsService,
    private linksService: LinksService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      this.getItem();
      this.getDocumentList();
      this.getItemLinks();
    });
  }

  getItem() {
    this.itemService.getItemById(this.itemId).toPromise().then( res => {
      this.item = res as any;
      console.log(res);
    });
  }

  getDocumentList() {
    this.documentService.getDocumentList(this.itemId).subscribe(res => {
      this.documentsArray = res as any;
      console.log(res);
    });
  }

  getItemLinks() {
    this.linksService.getByItemId(this.itemId).subscribe(res => {
      this.linkArray = res as any;
      console.log(res);
    });
  }

  hideLinksToggle() {
    this.hideLinks = !this.hideLinks;
  }

  toggleLinksType() {
    this.link2qr = !this.link2qr;
  }

}
