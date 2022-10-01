import { Component } from '@angular/core';

@Component({
  selector: 'app-main-breadcrumb',
  templateUrl: './main-breadcrumb.component.html'
})
export class MainBreadcrumbComponent {

  constructor() { }

  public back(): void {
    window.history.back();
  }
}
