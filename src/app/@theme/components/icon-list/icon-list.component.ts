import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChildren,
} from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbLayoutScrollService, NbPopoverDirective } from '@nebular/theme';

@Component({
  selector: 'eva-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconListComponent implements OnDestroy {

  private alive = true;

  @ViewChildren(NbPopoverDirective) popovers: NbPopoverDirective[];

  @Input() icons: string[];
  @Input() isMobileView: boolean = false;

  @Output() clickIcon: EventEmitter<string> = new EventEmitter();

  constructor(private scrollService: NbLayoutScrollService) {
      this.scrollService.onScroll()
        .pipe(takeWhile(() => this.alive && this.isMobileView))
        .subscribe(() => {
          this.popovers.forEach((popover) => {
            popover.hide();
          });
        });
  }

  clickIconHandler(icon: string) {
    this.clickIcon.emit(icon);
  }

  trackByFn(_, item) {
    return item;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
