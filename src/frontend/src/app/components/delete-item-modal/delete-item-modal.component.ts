import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-item-modal',
  templateUrl: './delete-item-modal.component.html',
  styleUrls: ['./delete-item-modal.component.scss']
})
export class  DeleteItemModalComponent implements OnInit {
  public name: string;
  public agree: boolean = false;

  constructor(
    public modalService: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.modalService.hide();
    this.modalService = null;
  }

  public delete(): void {
    this.agree = true;
    this.close();
  }
}
