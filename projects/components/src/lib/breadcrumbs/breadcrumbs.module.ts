import { NgModule } from '@angular/core';

import { MasBreadcrumb } from './breadcrumbs.component';
import { MasBreadcrumbItem } from './breadcrumb-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [MasBreadcrumb, MasBreadcrumbItem],
  declarations: [MasBreadcrumb, MasBreadcrumbItem],
})
export class MasBreadcrumbModule {}
