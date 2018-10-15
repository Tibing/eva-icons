import { Component } from '@angular/core';

@Component({
  selector: 'eva-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})

export class HeaderNavComponent {

  navItems = [
    {
      link: '/outline',
      title: 'Outline',
      iconName: 'star-outline',
      iconSize: 28,
    },
    {
      link: '/fill',
      title: 'Fill',
      iconName: 'star',
      iconSize: 28,
    },
  ];
}
