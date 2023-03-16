import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <h2>ObservableCounterComponent</h2>
    <ng-container *ngIf="{ value: count$ | async } as count">
      <button (click)="countSubject.next(count.value ? count.value + 1 : 1)">+</button>
      <p>Counter: {{count.value}}, doubled counter: {{double$ | async}}</p>
    </ng-container>
  `,
})
export class ObservableCounterComponent implements OnInit {
  countSubject = new BehaviorSubject<number>(1);
  count$ = this.countSubject.asObservable();
  double$ = this.count$.pipe(map((count) => count * 2))

  subscription = new Subscription();

  ngOnInit() {
    this.subscription.add(
      this.count$.subscribe({ next: (count)=>{
        console.log('Observable: count changed', count);
      }})
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
