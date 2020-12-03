import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class DataExchangeService {
  agreeWithChange = new Subject<boolean>();

  agreeWithChange$: Observable<boolean> = this.agreeWithChange.asObservable();

  setParams(value: boolean) {
    this.agreeWithChange.next(value);
  }
}
