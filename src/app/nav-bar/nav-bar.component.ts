import { Component, OnInit } from '@angular/core';
import NavBarItemModel from '../../models/NavBarItemModel';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  navBarItemList: Array<NavBarItemModel> = [];

  constructor() {
    this.navBarItemList.push(new NavBarItemModel('Home', 'ri-home-4-line', true));
    this.navBarItemList.push(new NavBarItemModel('Mail', 'ri-mail-line', false));
    this.navBarItemList.push(
      new NavBarItemModel('Settings', 'ri-settings-line', false)
    );
  }

  ngOnInit(): void {}

  changeTab(navBarItem: NavBarItemModel) {
    for (let navBar of this.navBarItemList) {
      navBar.selected = false;
    }
    navBarItem.selected = true;
  }
}
