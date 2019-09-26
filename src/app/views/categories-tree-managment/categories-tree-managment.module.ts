import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatRippleModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

import { CategoriesTreeManagmentComponent } from './categories-tree-managment.component';

const routes: Routes = [{ path: '', component: CategoriesTreeManagmentComponent }];

const MatModules = [MatTreeModule, MatIconModule, MatRippleModule, MatTooltipModule, MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [CategoriesTreeManagmentComponent],
  imports: [CommonModule, SharedModule, ...MatModules, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesTreeManagmentModule {}

export const routedComponents = [CategoriesTreeManagmentComponent];