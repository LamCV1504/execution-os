export interface INavigationItem {
  id: string;
  label: string;
  to: string;
  icon: React.ComponentType<{ size?: number }>;
}

export interface INavigationSection {
  id: string;
  label?: string;
  items: INavigationItem[];
}
