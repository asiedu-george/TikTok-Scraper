import {Subject} from 'rxjs';
import {ChangeDetectorRef, inject, ViewRef} from '@angular/core';

export const onDestroy = () => {
  const destroy$ = new Subject<void>();
  const viewRef = inject(ChangeDetectorRef) as ViewRef;

  viewRef.onDestroy(() => {
    destroy$.next();
    destroy$.complete();
  })
  return destroy$;
}
