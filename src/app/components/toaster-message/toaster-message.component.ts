import { Component } from '@angular/core';
import { ToasterMessageMenageService } from '../../core/toaster-message-manage/toaster-message-menage.service';
import { Router } from '@angular/router';
import { DataExchangeService } from '../../core/data-exchange.service';

@Component({
  selector: 'app-toaster-message',
  templateUrl: './toaster-message.component.html',
  styleUrls: ['./toaster-message.component.scss']
})
export class ToasterMessageComponent {
  message: string;
  showButtons: boolean;
  active: boolean = false;

  constructor(private routeTo: Router,
              private dataExchangeService: DataExchangeService,
              private toasterMessageMenageService: ToasterMessageMenageService) {
    this.toasterMessageMenageService.showToasterMessageSource$
      .subscribe(result => {
        this.active = true;
        this.message = result;

        this.showButtons = result === "Информация о продукте не сохранена, вы хотите ее сохранить?";
      })
  }

  saveChanges(agree: boolean, navigate: boolean) {
    this.active = false;
    if(this.showButtons) {
      this.dataExchangeService.setParams(agree);
    }
    if (navigate) {
      this.routeTo.navigateByUrl('/');
    }
  }
}
