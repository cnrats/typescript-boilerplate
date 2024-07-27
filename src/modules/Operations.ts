import type { ISumResponse } from '../types';

export class Operations {
  public static sum(a: number, b: number): ISumResponse {
    return { result: a + b };
  }
}
