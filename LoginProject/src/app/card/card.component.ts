import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any; 
  @Output() delete = new EventEmitter<void>(); 

  onDelete() {
    this.delete.emit(); 
  }


}
