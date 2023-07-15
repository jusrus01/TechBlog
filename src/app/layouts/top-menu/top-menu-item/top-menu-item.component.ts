import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Section } from 'src/app/core/resources/section.model';

@Component({
  selector: 'app-top-menu-item',
  templateUrl: './top-menu-item.component.html',
  styleUrls: ['./top-menu-item.component.scss']
})
export class TopMenuItemComponent {
  @Input() section!: Section | null;
  @Input() sections!: Section[] | null;
}
