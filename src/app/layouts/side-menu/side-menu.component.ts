import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Section } from 'src/app/core/resources/section.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  @Input() sections: Section[];

  public isOpen: boolean;

  constructor(private router: Router) {
    this.isOpen = false;
    this.sections = [];
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event !instanceof NavigationEnd) {
        return;
      }
      this.isOpen = false;
    })
  }
  
  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
