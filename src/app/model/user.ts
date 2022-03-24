export interface User {
    name: string;
    ranking: number;
    [key: string]: string | number;   //questa è una proprietà di Angular per poter chiamare nel sort-generic pipe la proprietà dell'interfaccia [propertyName]
  }