import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { Observable, delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-multi-buttons-loading',
  templateUrl: './multi-buttons-loading.component.html',
})
export class MultiButtonsLoadingComponent {
  constructor(private loadingService: LoadingService) {}

  fetchData(buttonId: string): void {
    of([])
      .pipe(
        tap(() => this.loadingService.setLoadingState(buttonId, true)),
        delay(5000)
      )
      .subscribe((data) => {
        this.loadingService.setLoadingState(buttonId, false);
      });
  }

  getLoadingState(buttonId: string): Observable<boolean> {
    return this.loadingService.getLoadingState(buttonId);
  }
}
