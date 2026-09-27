export interface INavigationItem<TIcon extends string = string> {
  id: string;
  label: string;
  path: string;
  icon: TIcon;
}
export interface INavigationSection<TIcon extends string = string> {
  id: string;
  label?: string;
  items: INavigationItem<TIcon>[];
}
