import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { UrlService } from '../../../../@core/data/service/url.service';

@Component({
  selector: 'eva-download-icon',
  styleUrls: ['./download-icon.component.scss'],
  templateUrl: './download-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadIconComponent implements AfterViewInit {

  @Input() selectedIcon: string = '';
  @Input() iconType: string = '';

  selectedFormat: string;
  downloadControls: { format: string; title: string }[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private urlService: UrlService) {}

  ngAfterViewInit() {
    this.downloadControls =
      this.urlService.getDownloadItemsDate(this.iconType, this.selectedIcon);

    this.changeDetectorRef.detectChanges();
  }

  selectFormatAndDownloadIcon(iconFormat: string) {
    this.selectedFormat = iconFormat;
  }
}
