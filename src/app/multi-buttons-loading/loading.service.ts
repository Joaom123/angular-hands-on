import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingStates: { [buttonId: string]: BehaviorSubject<boolean> } = {};

  setLoadingState(buttonId: string, state: boolean): void {
    if (!this.loadingStates[buttonId]) {
      this.loadingStates[buttonId] = new BehaviorSubject<boolean>(false);
    }
    this.loadingStates[buttonId].next(state);
  }

  getLoadingState(buttonId: string): BehaviorSubject<boolean> {
    if (!this.loadingStates[buttonId]) {
      this.loadingStates[buttonId] = new BehaviorSubject<boolean>(false);
    }
    return this.loadingStates[buttonId];
  }
}
