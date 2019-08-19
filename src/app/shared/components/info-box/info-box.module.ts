import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { InfoBoxFactoryService } from './info-box-factory.service';
import { BasicOrganizeInfoBoxComponent } from './basic-organize-info-box/basic-organize-info-box.component';
import { CommonOrganizeInfoBoxComponent } from './common-organize-info-box/common-organize-info-box.component';
import { CvspOrganizeInfoBoxComponent } from './cvsp-organize-info-box/cvsp-organize-info-box.component';
import { OrganizeInfoBoxFactoryComponent } from './organize-info-box-factory/organize-info-box-factory.component';
import { MatTooltipModule } from '@angular/material';

const components = [
  BasicOrganizeInfoBoxComponent,
  CommonOrganizeInfoBoxComponent,
  CvspOrganizeInfoBoxComponent,
  OrganizeInfoBoxFactoryComponent
];

@NgModule({
  imports: [SharedModule, MatTooltipModule],
  exports: [...components],
  declarations: [...components],
  providers: [InfoBoxFactoryService]
})
export class InfoBoxModule {}
