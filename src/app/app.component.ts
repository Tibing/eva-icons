import { Component } from '@angular/core';
import { DialogStateService } from './@theme/services/dialog-state.service';

@Component({
  selector: 'eva-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isOpenDialog = false;

  constructor(private dialogStateService: DialogStateService) {
    this.dialogStateService.onChangeDialogState()
      .subscribe(({state}) => {
        this.isOpenDialog = state === 'open';
      });
  }
}
