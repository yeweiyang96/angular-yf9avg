import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product !: Product;
  @Output() notify = new EventEmitter(true);
  alert = 'You will be notified when the product goes on sale';
  addAlert() {
    this.notify.emit(this.alert)
  }


}
