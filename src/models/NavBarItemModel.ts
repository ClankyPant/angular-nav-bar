export default class NavBarItemModel {
  title: string;
  icon: string;
  selected: boolean;

  constructor(title: string, icon: string, selected: boolean) {
    this.title = title;
    this.icon = icon;
    this.selected = selected;
  }
}
