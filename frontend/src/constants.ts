export interface Plant {
  id: string;
  name: string;
  days_to_harvest: number;
}

export interface LayoutItem {
  x: number;
  y: number;
  w: number;
  h: number;
  i: number;
  plant: Plant;
  static: boolean;
}

export interface LayoutConfiguration {
  rows: number;
  cols: number;
  layoutDefinition: LayoutItem[]
}

export interface Layout {
  id?: string;
  name: string;
  configuration: LayoutConfiguration | {};
}
