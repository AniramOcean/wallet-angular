import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Purchase } from '../wallet.component';

@Component({
  selector: 'app-purchase-preview',
  templateUrl: './purchase-preview.component.html',
  styleUrls: ['./purchase-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchasePreviewComponent implements OnInit {
  @Input()
  purchase!: Purchase;

  @Input()
  isCommentVisible = false;

  @Output()
  clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent) {
    if (!this.purchase.comment) return
    event.stopPropagation();
    this.clicked.emit();
  }

}
