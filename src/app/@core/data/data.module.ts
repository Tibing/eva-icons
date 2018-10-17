import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconService } from './service/icons/icon.service';
import { UrlService } from './service/url.service';

const SERVICES = [
  IconService,
  UrlService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
