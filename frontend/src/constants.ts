export interface Plant {
  id: string;
  name: string;
  days_to_harvest: number;
}
export interface LayoutConfiguration {
  x: number;
  y: number;
  w: number;
  h: number;
  i: number;
  plant: Plant;
  static: boolean;
}

export interface Layout {
  id: string;
  name: string;
  configuration: LayoutConfiguration[];
}
