import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { icons } from '../../../../../package-build/eva';
import { fillOrder } from './fill-order-icons';
import { outlineOrder } from './outline-order-icons';

class Icons {
  fill: string[];
  outline: string[];
}

export class IconServiceData {
  icons: string[];
  message: string;
}

@Injectable()
export class IconService {

  private icons: Icons;

  data: IconServiceData = {
    icons: [],
    message: '',
  };

  private sortIcons = (first, second) => first.order - second.order;

  constructor() {
    this.icons = Object.keys(icons)
      .reduce((result, item, index, iconsArray): any => {
        if (item.indexOf('outline') === -1) {
          const iconData = {
            name: item,
            order: fillOrder[item],
          };

          result['fill'] = result['fill'].concat(iconData);
        } else {
          const iconData = {
            name: item,
            order: outlineOrder[item],
          };

          result['outline'] = result['outline'].concat(iconData);
        }

        if (index === iconsArray.length - 1) {
          result['outline'].sort(this.sortIcons);
          result['fill'].sort(this.sortIcons);
        }

        return result;
      }, { fill: [], outline: [] });
  }

  getIconsData(type: string): Observable<IconServiceData> {
    this.data.icons = this.icons[type];

    return observableOf(this.data);
  }

  getFilteredIconsData(searchKey: string, type: string): Observable<IconServiceData> {
    const foundIcons = this.icons[type].filter((item) => {
      return item.name.indexOf(searchKey.toLowerCase()) !== -1;
    });

    this.data.icons = foundIcons;
    this.data.message = foundIcons.length === 0 ? 'There are no results that match your search' : '';

    return observableOf(this.data);
  }
}
