import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public isPopover1 = false;
  public isPopover2 = false;

  constructor() {}

  openPopover1() {
    this.isPopover1 = this.isPopover1 ? false : true;
  }

  openPopover2() {
    this.isPopover2 = this.isPopover2 ? false : true;
  }
}
