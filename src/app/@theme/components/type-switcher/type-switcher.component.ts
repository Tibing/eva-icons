import { Component } from '@angular/core';

@Component({
  selector: 'eva-type-switcher',
  templateUrl: './type-switcher.component.html',
  styleUrls: ['./type-switcher.component.scss'],
})

export class TypeSwitcherComponent {

  navItems = [
    {
      link: '/outline',
      title: 'Outline',
      iconName: 'star-outline',
    },
    {
      link: '/fill',
      title: 'Fill',
      iconName: 'star',
    },
  ];
}
