export interface Box {
  image: string;
  title: string;
  subtitle?: string;
}

export interface Grid {
  big: Box;
  small: Box[];
}
