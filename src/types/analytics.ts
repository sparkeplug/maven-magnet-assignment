export enum Category {
  "baby tolerance" = 1,
  "ingredients",
  "health benefits",
  "taste",
  "peer recommendation",
  "expert advocacy",
  "brand value",
  "convenience",
  "price"
}

export interface ICategoryDrivers {
  name: string;
  catergoryDrivers: number[];
}
