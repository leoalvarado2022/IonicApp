import { Injectable } from '@angular/core';

@Injectable()
export class CleanStringService {

  constructor() {

  }

  /**
   * replaceDoubleQuotes
   * @param original text to replace quotes
   */
  public replaceDoubleQuotes = (original: string): string => {
    return original.replace(/"/g, "'");
  }
  
}
