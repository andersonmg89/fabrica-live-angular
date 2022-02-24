import { Type } from "./Type";

export interface Pokemon {
    image: string;
    number: number;
    name: string;
    types: Type[];
  }

  function leadingZero(str: string | number, size = 3): string {
    let s = String(str);
  
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
  
    return s;
  }