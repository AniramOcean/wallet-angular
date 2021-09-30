import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Purchase} from "../../../../shared/interfaces/Purchase";

@Component({
  selector: 'app-purchase-preview',
  templateUrl: './purchase-preview.component.html',
  styleUrls: ['./purchase-preview.component.scss'],
})
export class PurchasePreviewComponent implements OnInit {
  @Input()
  purchase!: Purchase;

  @Input()
  isCommentVisible = true;

  @Output()
  clicked = new EventEmitter<void>();

  @Output()
  deleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (!this.purchase.comment) return
    this.clicked.emit();
  }

  onDelete(event: MouseEvent) {
    event.stopPropagation();
    this.deleted.emit();
  }
}
