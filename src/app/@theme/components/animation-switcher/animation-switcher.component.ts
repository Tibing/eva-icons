import { Component } from '@angular/core';

@Component({
  selector: 'eva-animation-switcher',
  templateUrl: './animation-switcher.component.html',
  styleUrls: ['./animation-switcher.component.scss'],
})

export class AnimationSwitcherComponent {

  animationItems = [
    {
      title: 'Zoom',
      iconName: 'maximize-outline',
    },
    {
      title: 'Pulse',
      iconName: 'activity-outline',
    },
    {
      title: 'Shake',
      iconName: 'shake-outline',
    },
    {
      title: 'Flip in Y',
      iconName: 'flip-outline',
    },
  ];
}
