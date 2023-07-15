import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TopMenuItemComponent } from './top-menu/top-menu-item/top-menu-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    TopMenuComponent,
    TopMenuItemComponent,
    SideMenuComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatSidenavModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
