import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ObservableCounterComponent } from './observable-counter.component';
import { SignalsCounterComponent } from './signals-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ObservableCounterComponent, SignalsCounterComponent],
  template: `
    <app-observable-counter />
    <app-signals-counter />
  `,
})
export class AppComponent {
  title = 'a16.4';
}
