import { Component } from '@angular/core';
import { EvaVersionService } from '../../services/version.service';
import { UrlService } from '../../../@core/data/service/url.service';

@Component({
  selector: 'eva-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  zipUrl: string;
  currentVersion: string;

  constructor(private versionService: EvaVersionService,
              private urlService: UrlService) {
    this.currentVersion = this.versionService.getEvoVersion();
    this.zipUrl = this.urlService.getZippedIconsUrl();
  }
}
