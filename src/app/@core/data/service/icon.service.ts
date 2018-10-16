import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { icons } from '../../../../../package-build/eva';
import { fillOrder } from './fill-icons-order';
import { outlineOrder } from './outline-icons-order';
import { iconsTags } from './icons-tags';

class Icon {
  name: string;
  order: number;
}

class Icons {
  fill: Icon[];
  outline: Icon[];
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
      .reduce((result, item, index, iconsArray): Icons => {
        // TODO: refactoring
        let tags;
        const groupTagName = item.replace('-outline', '');

        if (iconsTags[groupTagName]) {
          tags = iconsTags[groupTagName].concat(groupTagName);
        }

        if (item.indexOf('outline') === -1) {
          const iconData = {
            name: item,
            order: fillOrder[item],
            tags,
          };

          result['fill'] = result['fill'].concat(iconData);
        } else {
          const iconData = {
            name: item,
            order: outlineOrder[item],
            tags,
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
      return item.tags.find((tag) => tag.indexOf(searchKey.toLowerCase()) !== -1);
    });

    this.data.icons = foundIcons;
    this.data.message = foundIcons.length === 0 ? 'There are no results that match your search' : '';

    return observableOf(this.data);
  }
}
