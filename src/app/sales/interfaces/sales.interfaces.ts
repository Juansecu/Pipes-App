export enum Color {
  red,
  black,
  blue,
  green,
  yellow,
}

export interface Hero {
  name: string;
  fly: boolean;
  color: Color;
}
