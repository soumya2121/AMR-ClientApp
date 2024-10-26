import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadServiceService {

  public loaderVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
