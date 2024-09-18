import {Component, HostListener, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgToastModule} from "ng-angular-popup";
import {Store} from '@ngrx/store';
import {constants} from "./utils/contants";
import {AppStateActions} from './store/app.actions';
import {authSelectors} from './authentication/store/auth.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private store= inject(Store);
  private state = this.store.selectSignal(authSelectors);
  private key: string = constants.storageKey;

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(): void {
    const storageValue = JSON.stringify(this.state());
    localStorage.setItem(this.key, storageValue);
  }

  ngOnInit() {
    const persistState = localStorage.getItem(this.key);
    if (persistState) {
      const storeData = JSON.parse(persistState);
      this.store.dispatch(AppStateActions.getStoreData(storeData));
    }
    localStorage.removeItem(this.key);
  }
}
