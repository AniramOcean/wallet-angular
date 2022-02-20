import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay} from "@taiga-ui/cdk";
import {Purchase} from "../../../../../shared/interfaces/Purchase";

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss'],
})
export class PurchaseAddComponent implements OnInit {
  @Output() add = new EventEmitter<Purchase>();
  form: any;
  currentFullDate = new Date();
  currentDay = this.currentFullDate.getDate();
  currentYear = this.currentFullDate.getFullYear();
  currentMonth = this.currentFullDate.getMonth() + 1;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.max(40)
      ]),
      price: new FormControl(100, [
        Validators.required,
        Validators.min(10),
        Validators.max(500000),
        Validators.pattern(/^\d+$/)
      ]),
      comment: new FormControl(''),
      date: new FormControl(new TuiDay(this.currentYear, this.currentMonth, this.currentDay)),
    });
  }

  get price() { return this.form.get('price'); }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit({...this.form.value});
  }

  getError(controlName: string): string {
    const control = this.form.get(controlName);
    const errors = control && control.errors;
    let message = '';

    if (!errors) return message;

    if (errors.required) message = `${control} is required`;
    if (errors.max) message = `Minimum value is ${errors.max.max}`;
    if (errors.min) message = `Minimum value is ${errors.min.min}`;

    return message;
  }

}
