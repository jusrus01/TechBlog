import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Section } from 'src/app/core/resources/section.model';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  @Output() toggleSideMenu: EventEmitter<void>;
  @Input() isSideMenuOpen: boolean;
  @Input() sections: Section[];
  
  constructor() {
    this.isSideMenuOpen = false;
    this.toggleSideMenu = new EventEmitter<void>();
    this.sections = [];
  }

  public triggerToggleSideMenu(): void {
    this.toggleSideMenu.emit();
  }
}