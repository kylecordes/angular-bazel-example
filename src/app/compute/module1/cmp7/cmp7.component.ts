import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cmp7',
  templateUrl: './cmp7.component.html',
  styleUrls: ['./cmp7.component.css']
})
export class Cmp7Component {
  /** Based on the screen size, switch from standard to one column per row */
  cards: Observable<{title: string; cols: number; rows: number;}[]> =
      this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(({matches}) => {
        if (matches) {
          return [
            {title: 'Card 1', cols: 1, rows: 1}, {title: 'Card 2', cols: 1, rows: 1},
            {title: 'Card 3', cols: 1, rows: 1}, {title: 'Card 4', cols: 1, rows: 1}
          ];
        }

        return [
          {title: 'Card 1', cols: 2, rows: 1}, {title: 'Card 2', cols: 1, rows: 1},
          {title: 'Card 3', cols: 1, rows: 2}, {title: 'Card 4', cols: 1, rows: 1}
        ];
      }));

  constructor(private breakpointObserver: BreakpointObserver) {}
}