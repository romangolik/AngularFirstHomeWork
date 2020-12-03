import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ToasterMessageMenageService {
  showToasterMessageSource = new Subject<string>();

  showToasterMessageSource$: Observable<string> = this.showToasterMessageSource.asObservable();

  showToasterMessage(message: string) {
    this.showToasterMessageSource.next(message);
  }
}
