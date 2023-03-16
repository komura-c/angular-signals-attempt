import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <h2>SignalsCounterComponent</h2>
    <ng-container *ngIf="count">
      <button (click)="count.set(count() + 1)">+</button>
      <p>Counter: {{ count() }}, doubled counter: {{ double() }}</p>
    </ng-container>
  `,
})
export class SignalsCounterComponent {
  count = signal(1);
  double = computed(()=> this.count() * 2)

  constructor() {
    effect(() => {
      console.log('Signals: count changed', this.count());
    });
  }
}
