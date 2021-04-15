import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import {MatBottomSheet, MatBottomSheetConfig} from '@angular/material/bottom-sheet';
import { AddToScreenComponentComponent } from '../ui/add-to-screen-component/add-to-screen-component.component';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform
  ) { }

  public initPwaPrompt() {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        this.openPromptComponent('android');
      });
    }
    if (this.platform.IOS) {
      const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
      if (!isInStandaloneMode) {
        this.openPromptComponent('ios');
      }
    }
  }

  private openPromptComponent(mobileType: 'ios' | 'android') {
    timer(3000)
      .pipe(take(1))
      .subscribe(() => this.bottomSheet.open(AddToScreenComponentComponent, { data: { mobileType, promptEvent: this.promptEvent } }));
  }
}


