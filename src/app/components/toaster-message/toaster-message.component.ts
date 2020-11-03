import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toaster-message',
  templateUrl: './toaster-message.component.html',
  styleUrls: ['./toaster-message.component.scss']
})
export class ToasterMessageComponent {
  @Input() showButtons;

  @Output() agree = new EventEmitter<boolean>();

  saveChanges(save: boolean) {
    this.agree.emit(save);
  }
}
