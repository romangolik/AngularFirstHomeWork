import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product-info-form',
  templateUrl: './product-info-form.component.html',
  styleUrls: ['./product-info-form.component.scss']
})
export class ProductInfoFormComponent {

  constructor() { }

  @Input() showForm: boolean;
}
