import { Injectable } from '@angular/core';

type userType = 'ADMIN' | 'USER';

@Injectable({
  providedIn: 'root',
})
export class BranchCoverageTestService {
  withSwitch(key: userType) {
    switch (key) {
      case 'ADMIN':
        return 'admin case';

      case 'USER':
        return 'user case';

      default:
        break;
    }
    return;
  }

  withLiteralObject(key: userType) {
    const test = {
      ['ADMIN']: 'admin case',
      ['USER']: 'user case',
    };
    return test[key] || '';
  }
}
